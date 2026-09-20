import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q65z-hbfa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q65z-hbfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bunkerweb-light"} {...others} />);
}

export default Component;
