import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7sr6ubzr.css';
import '../../css/b/bxwa93b2u.css';
import '../../css/e/ec1xl5bkr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i7sr6ubzr"/><path class="bxwa93b2u"/><path class="ec1xl5bkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:trace"} {...others} />);
}

export default Component;
