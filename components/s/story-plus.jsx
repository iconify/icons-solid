import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x_79x3bti.css';
import '../../css/c/ck6bei2mt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse transform="rotate(90 12.07 11.98)" class="x_79x3bti"/><path class="ck6bei2mt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:story-plus"} {...others} />);
}

export default Component;
