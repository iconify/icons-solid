import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8a77rbjy.css';
import '../../css/g/gh2npccpo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q8a77rbjy"/><path class="gh2npccpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:arrow-swap"} {...others} />);
}

export default Component;
