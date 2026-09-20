import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwb6_vbxr.css';
import '../../css/z/z5g1e3aps.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lwb6_vbxr"/><path class="z5g1e3aps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:ruler"} {...others} />);
}

export default Component;
