import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t3hohrr9d.css';
import '../../css/t/tfhac2bib.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="t3hohrr9d"/><path class="tfhac2bib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:microphone"} {...others} />);
}

export default Component;
