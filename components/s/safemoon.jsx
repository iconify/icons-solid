import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aa150nb_j.css';
import '../../css/m/md286fbip.css';
import '../../css/u/u6vkkgxia.css';
import '../../css/r/rmxm7klsj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="aa150nb_j"/><g class="md286fbip"><path class="u6vkkgxia"/><path class="rmxm7klsj"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:safemoon"} {...others} />);
}

export default Component;
