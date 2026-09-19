import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lxln9bcuq.css';
import '../../css/g/gcac09b7g.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="lxln9bcuq"/><path class="gcac09b7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:typo3-wordmark"} {...others} />);
}

export default Component;
