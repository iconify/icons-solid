import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c479rxbrg.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/q/qmnpc1bre.css';
import '../../css/c/cevwv2b8r.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="c479rxbrg"/><g class="x8poo_bjf"><circle class="qmnpc1bre"/><path class="cevwv2b8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:expressionless-face"} {...others} />);
}

export default Component;
