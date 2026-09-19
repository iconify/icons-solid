import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k71by3b1k.css';
import '../../css/o/obq3yybhr.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="k71by3b1k"/><path class="obq3yybhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:contrast-outline"} {...others} />);
}

export default Component;
