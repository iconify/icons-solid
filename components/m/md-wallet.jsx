import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k90nvltuk.css';
import '../../css/w/w678ji4gs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k90nvltuk"/><path class="w678ji4gs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-wallet"} {...others} />);
}

export default Component;
