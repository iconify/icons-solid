import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uw6_0n11d.css';
import '../../css/o/okn9x2b2j.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="uw6_0n11d"/><path class="okn9x2b2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:vault-wordmark"} {...others} />);
}

export default Component;
