import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jjzc-6bds.css';
import '../../css/y/ybckblbxh.css';
import '../../css/a/an4w8gbhl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jjzc-6bds"/><path class="ybckblbxh"/><circle class="an4w8gbhl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:check-in"} {...others} />);
}

export default Component;
