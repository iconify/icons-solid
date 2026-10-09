import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eab-bra5j.css';
import '../../css/e/eokgyxb6e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="eab-bra5j"/><path class="eokgyxb6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:server-20"} {...others} />);
}

export default Component;
