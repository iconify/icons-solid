import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/momxgpb6o.css';
import '../../css/m/md286fbip.css';
import '../../css/i/i8nlo91al.css';
import '../../css/x/xlqm4ibmx.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="momxgpb6o"/><g class="md286fbip"><path class="i8nlo91al"/><path class="xlqm4ibmx"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:band"} {...others} />);
}

export default Component;
