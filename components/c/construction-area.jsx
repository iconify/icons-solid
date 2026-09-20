import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/p/pz2_aebkf.css';
import '../../css/d/dpyxk5bua.css';
import '../../css/c/cws2mpbgb.css';
import '../../css/p/pvfeeqjnx.css';
import '../../css/u/u947e7bow.css';
import '../../css/k/ke7fgvo8v.css';
import '../../css/e/e-f2bebor.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="pz2_aebkf"/><path class="dpyxk5bua"/><path class="cws2mpbgb"/><path class="pvfeeqjnx"/><path class="u947e7bow"/><path class="ke7fgvo8v"/><path class="e-f2bebor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:construction-area"} {...others} />);
}

export default Component;
