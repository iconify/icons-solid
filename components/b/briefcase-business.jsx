import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/ho1mflbpe.css';
import '../../css/t/tcieocc3d.css';
import '../../css/g/gw-28_7iu.css';
import '../../css/h/hsp3mfubq.css';
import '../../css/t/t28xo0bbq.css';
import '../../css/h/h6150tbwj.css';
import '../../css/h/h86ho6cvu.css';
import '../../css/v/vkk3jbbhf.css';
import '../../css/r/rjjw2bb7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ho1mflbpe wm-shadow"/><path class="tcieocc3d wm-s"/><path class="gw-28_7iu wm-shadow"/><path class="hsp3mfubq"/><path class="t28xo0bbq"/><path class="h6150tbwj"/><path class="h86ho6cvu wm-s"/><path class="vkk3jbbhf wm-s"/><path class="rjjw2bb7q wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:briefcase-business"} {...others} />);
}

export default Component;
