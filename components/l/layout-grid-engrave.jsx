import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/harvsacrb.css';
import '../../css/y/yyu52cbqp.css';
import '../../css/b/bqfneeboe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="harvsacrb"/><path class="wm-shadow yyu52cbqp"/><path class="bqfneeboe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:layout-grid-engrave"} {...others} />);
}

export default Component;
