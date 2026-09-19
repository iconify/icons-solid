import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u3_381bly.css';
import '../../css/i/iz88rmbke.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u3_381bly"/><path class="iz88rmbke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-business"} {...others} />);
}

export default Component;
