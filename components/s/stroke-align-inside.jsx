import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/at017gb0u.css';
import '../../css/n/nb488jb9h.css';
import '../../css/w/w1l3h_dpv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="at017gb0u"/><path class="nb488jb9h"/><path class="w1l3h_dpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:stroke-align-inside"} {...others} />);
}

export default Component;
