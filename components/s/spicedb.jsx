import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/evs_ze2wt.css';
import '../../css/r/rge2six-h.css';
import '../../css/y/ycgbuscwn.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="evs_ze2wt"/><path class="rge2six-h"/><path class="ycgbuscwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:spicedb"} {...others} />);
}

export default Component;
