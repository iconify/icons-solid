import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqax-6b-d.css';
import '../../css/n/nf9l68beg.css';
import '../../css/w/wdplfeaon.css';
import '../../css/a/a8qw23j_z.css';
import '../../css/x/x6pps9bac.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="jqax-6b-d"><path class="nf9l68beg"/><path class="wdplfeaon"/><path class="a8qw23j_z"/><path class="x6pps9bac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:world"} {...others} />);
}

export default Component;
