import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fkijn4jux.css';
import '../../css/d/dppta002c.css';
import '../../css/w/wr28_ubwm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="fkijn4jux"/><path class="dppta002c"/><path class="wr28_ubwm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:square-lock-minus-02"} {...others} />);
}

export default Component;
