import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ayvsc-kfw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ayvsc-kfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:universal-access"} {...others} />);
}

export default Component;
