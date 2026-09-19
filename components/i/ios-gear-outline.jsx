import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qg-ah_bfc.css';
import '../../css/e/e5ufuhb8i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qg-ah_bfc"/><path class="e5ufuhb8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-gear-outline"} {...others} />);
}

export default Component;
