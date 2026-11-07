import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njrvemoot.css';
import '../../css/u/ujd91437t.css';
import '../../css/d/d6h3j5b5e.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="njrvemoot"/><path class="ujd91437t"/><path class="d6h3j5b5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-cross-bold"} {...others} />);
}

export default Component;
