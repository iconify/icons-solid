import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kes-_rdjt.css';
import '../../css/y/yu4t5mnyo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kes-_rdjt"/><path class="yu4t5mnyo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:button-zigzag-1"} {...others} />);
}

export default Component;
