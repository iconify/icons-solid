import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/snfd_jbqj.css';
import '../../css/d/d7v_hcc-g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="snfd_jbqj"/><path class="d7v_hcc-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:pricetag-outline"} {...others} />);
}

export default Component;
