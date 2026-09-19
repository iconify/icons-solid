import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cwyxrkbgu.css';
import '../../css/e/ec9sckbjq.css';
import '../../css/g/grxa6ebnn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cwyxrkbgu"/><path class="ec9sckbjq"/><path class="grxa6ebnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-more-outline"} {...others} />);
}

export default Component;
