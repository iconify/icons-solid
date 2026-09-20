import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvpxr2b8r.css';
import '../../css/u/u13r1zb_i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yvpxr2b8r"/><path class="u13r1zb_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:patchmon"} {...others} />);
}

export default Component;
