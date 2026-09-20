import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/it0pw9vzb.css';
import '../../css/p/p6fvi8blj.css';
import '../../css/f/f11l8tb-e.css';
import '../../css/c/c8kervbmo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="it0pw9vzb"/><path class="p6fvi8blj"/><path class="f11l8tb-e"/><path class="c8kervbmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:headphone"} {...others} />);
}

export default Component;
