import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hbm6yshqe.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/h/h_oi-tcog.css';
import '../../css/z/zsdc5-17y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hbm6yshqe"/><g class="xtpeb-edw"><path class="h_oi-tcog"/><path class="zsdc5-17y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:checklist-bold-duotone"} {...others} />);
}

export default Component;
