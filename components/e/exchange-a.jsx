import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qopkvebup.css';
import '../../css/t/th7v47buf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qopkvebup"/><path class="th7v47buf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:exchange-a"} {...others} />);
}

export default Component;
