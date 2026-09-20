import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/j/jxl67pbry.css';
import '../../css/e/ewk27hoxh.css';
import '../../css/e/enlxepbgk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><circle class="jxl67pbry"/><circle class="ewk27hoxh"/><circle class="enlxepbgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:meatballs-menu"} {...others} />);
}

export default Component;
