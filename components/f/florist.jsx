import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aspcfwdmv.css';
import '../../css/a/ar92us5lh.css';

const viewBox = {"width":50,"height":50};
const content = `<ellipse class="aspcfwdmv"/><path class="ar92us5lh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:florist"} {...others} />);
}

export default Component;
