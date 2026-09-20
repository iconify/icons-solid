import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c479rxbrg.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/q/qmnpc1bre.css';
import '../../css/r/rauhwub6j.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="c479rxbrg"/><g class="x8poo_bjf"><circle class="qmnpc1bre"/><path class="rauhwub6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:face-with-crossed-out-eyes"} {...others} />);
}

export default Component;
