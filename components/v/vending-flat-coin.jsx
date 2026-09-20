import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfvyi0osq.css';
import '../../css/u/uo31dmb7j.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="sfvyi0osq"/><path class="uo31dmb7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:vending-flat-coin"} {...others} />);
}

export default Component;
