import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tk2q7ibxg.css';
import '../../css/a/ar63qbcbl.css';
import '../../css/z/z9ft0sbrs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tk2q7ibxg"/><path class="ar63qbcbl"/><path class="z9ft0sbrs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:toilet"} {...others} />);
}

export default Component;
