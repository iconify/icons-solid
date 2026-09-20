import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_fc_bb1g.css';
import '../../css/m/mo96-mi7j.css';
import '../../css/a/as7o-d6nf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d_fc_bb1g"/><path class="mo96-mi7j"/><path class="as7o-d6nf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:beaver-habit-tracker"} {...others} />);
}

export default Component;
