import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/dhgjklnhw.css';
import '../../css/t/t82gntoqc.css';
import '../../css/t/tp56nsd6v.css';
import '../../css/a/a-aisvbxb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="dhgjklnhw wm-shadow"/><path class="t82gntoqc wm-shadow"/><path class="tp56nsd6v"/><path class="a-aisvbxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:lamp"} {...others} />);
}

export default Component;
