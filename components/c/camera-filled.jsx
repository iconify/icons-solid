import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ef6k_cc-g.css';
import '../../css/t/t7his9f7x.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ef6k_cc-g"/><path class="t7his9f7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:camera-filled"} {...others} />);
}

export default Component;
