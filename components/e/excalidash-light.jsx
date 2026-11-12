import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvrll1__l.css';
import '../../css/t/tr0pmhbxp.css';
import '../../css/d/d_fb3dbwg.css';
import '../../css/i/i9wuo-33s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qvrll1__l"/><path class="tr0pmhbxp"/><path class="d_fb3dbwg"/><path class="i9wuo-33s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:excalidash-light"} {...others} />);
}

export default Component;
