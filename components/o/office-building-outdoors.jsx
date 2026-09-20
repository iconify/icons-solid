import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hzny16bib.css';
import '../../css/i/i_dm2v_0f.css';
import '../../css/f/fyxhhkb4t.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hzny16bib"/><path class="i_dm2v_0f"/><path class="fyxhhkb4t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:office-building-outdoors"} {...others} />);
}

export default Component;
