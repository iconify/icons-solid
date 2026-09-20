import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgyhf_lxq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bgyhf_lxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:timesy-light"} {...others} />);
}

export default Component;
