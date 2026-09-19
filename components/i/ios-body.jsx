import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmrl7o3_k.css';
import '../../css/c/clim-4j3v.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="fmrl7o3_k"/><path class="clim-4j3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-body"} {...others} />);
}

export default Component;
