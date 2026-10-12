import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iiq4byboj.css';
import '../../css/y/y314rdblj.css';
import '../../css/f/fwfducc9s.css';
import '../../css/m/mfnsgnmug.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iiq4byboj"/><path class="y314rdblj"/><path class="fwfducc9s"/><path class="mfnsgnmug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:speedometer"} {...others} />);
}

export default Component;
