import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x_vzdkbnw.css';
import '../../css/f/fyrhi1buf.css';
import '../../css/h/h9uoembmc.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="x_vzdkbnw"/><path class="fyrhi1buf"/><path class="h9uoembmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:job-search-magnifier-briefcase"} {...others} />);
}

export default Component;
