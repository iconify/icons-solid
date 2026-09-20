import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l6ec5ibda.css';
import '../../css/z/z82ckhzmf.css';
import '../../css/j/jf_8h71yx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l6ec5ibda"/><path class="z82ckhzmf"/><path class="jf_8h71yx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:profilarr"} {...others} />);
}

export default Component;
