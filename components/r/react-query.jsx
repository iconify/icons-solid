import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8zkctbrn.css';
import '../../css/b/bru00mf_u.css';
import '../../css/o/o2czk5b_p.css';
import '../../css/j/j14ip5bex.css';

const viewBox = {"width":256,"height":230};
const content = `<path class="i8zkctbrn"/><path class="bru00mf_u"/><path class="o2czk5b_p"/><path class="j14ip5bex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:react-query"} {...others} />);
}

export default Component;
