import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/rvcky7bci.css';
import '../../css/s/s53y4obfm.css';
import '../../css/u/uoiay--1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="rvcky7bci"/><path class="s53y4obfm"/><path class="uoiay--1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:external-link"} {...others} />);
}

export default Component;
