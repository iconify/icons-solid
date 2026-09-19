import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/muqwcsbah.css';
import '../../css/w/wx9jn1bne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="muqwcsbah"/><path class="wx9jn1bne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:delivery-view-01"} {...others} />);
}

export default Component;
