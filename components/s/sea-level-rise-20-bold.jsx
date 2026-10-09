import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtgyfug1i.css';
import '../../css/a/an0ow8eva.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xtgyfug1i"/><path class="an0ow8eva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sea-level-rise-20-bold"} {...others} />);
}

export default Component;
