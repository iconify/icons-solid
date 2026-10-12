import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/koloktvcd.css';
import '../../css/q/q0b14tbvl.css';
import '../../css/b/bmcdz44gi.css';
import '../../css/v/v7svjwiow.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(90 12 12)" class="koloktvcd"/><circle transform="rotate(90 12 12)" class="q0b14tbvl"/><circle transform="rotate(90 12 12)" class="bmcdz44gi"/><path class="v7svjwiow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:target-sight"} {...others} />);
}

export default Component;
