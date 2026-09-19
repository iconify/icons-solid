import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vfh38tbwa.css';
import '../../css/m/md286fbip.css';
import '../../css/j/jld5q8bnb.css';
import '../../css/a/ajhqfpamm.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="vfh38tbwa"/><g class="md286fbip"><path class="jld5q8bnb"/><path class="ajhqfpamm"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:trtl"} {...others} />);
}

export default Component;
