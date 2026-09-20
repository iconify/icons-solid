import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ybu_-acgm.css';
import '../../css/k/khzk-5dki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ybu_-acgm"/><path class="khzk-5dki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:megaphone-b"} {...others} />);
}

export default Component;
