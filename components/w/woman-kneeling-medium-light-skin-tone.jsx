import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpyqy236k.css';
import '../../css/p/pxvt114hy.css';
import '../../css/c/c8046fbzv.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/i/iem6_ei8g.css';
import '../../css/f/f4h9sgbbv.css';
import '../../css/z/z43r0hq8v.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="wpyqy236k"><circle class="pxvt114hy"/><path class="c8046fbzv"/></g><g class="brzn_0bpr"><circle class="iem6_ei8g"/><path class="f4h9sgbbv"/><path class="z43r0hq8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-kneeling-medium-light-skin-tone"} {...others} />);
}

export default Component;
