import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lhc3qnbeu.css';
import '../../css/z/zv-53k7bp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lhc3qnbeu"/><path class="zv-53k7bp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-nutrition"} {...others} />);
}

export default Component;
