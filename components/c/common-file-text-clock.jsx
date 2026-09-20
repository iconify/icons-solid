import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f3mi_ybsx.css';
import '../../css/z/z0xrq4b0n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f3mi_ybsx"/><path class="z0xrq4b0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:common-file-text-clock"} {...others} />);
}

export default Component;
