import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fssu8fvgl.css';
import '../../css/p/pplhre8-k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fssu8fvgl"/><path class="pplhre8-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:homelable-dark"} {...others} />);
}

export default Component;
