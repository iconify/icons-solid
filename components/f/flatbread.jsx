import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az7hstbmu.css';
import '../../css/n/nmdvjebhi.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/q/qmnpc1bre.css';
import '../../css/a/ayh_-joxv.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="az7hstbmu"/><path class="nmdvjebhi"/><g class="x8poo_bjf"><circle class="qmnpc1bre"/><path class="ayh_-joxv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flatbread"} {...others} />);
}

export default Component;
