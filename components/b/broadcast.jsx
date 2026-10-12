import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mulj2plzk.css';
import '../../css/i/i91_xcaxb.css';
import '../../css/h/hsnffjadq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(90 12.14 12)" class="mulj2plzk"/><circle transform="rotate(90 12.14 12)" class="i91_xcaxb"/><path class="hsnffjadq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:broadcast"} {...others} />);
}

export default Component;
