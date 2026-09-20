import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/aqhok2bbj.css';
import '../../css/p/pt04u-aen.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><circle class="aqhok2bbj"/><path class="pt04u-aen"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:sunlight-light"} {...others} />);
}

export default Component;
