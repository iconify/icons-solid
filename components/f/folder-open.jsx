import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n9zo70bzb.css';
import '../../css/p/ptg6m08hh.css';
import '../../css/y/y5vmf2x-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n9zo70bzb"/><path class="ptg6m08hh"/><path class="y5vmf2x-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-open"} {...others} />);
}

export default Component;
