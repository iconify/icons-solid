import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gndorrpbi.css';
import '../../css/m/md286fbip.css';
import '../../css/j/jhukr2_rw.css';
import '../../css/w/w2xyjlbmw.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="gndorrpbi"/><g class="md286fbip"><path class="jhukr2_rw"/><path class="w2xyjlbmw"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:ntbc"} {...others} />);
}

export default Component;
