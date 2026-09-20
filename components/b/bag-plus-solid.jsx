import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkch5_a1m.css';
import '../../css/j/j5118ebqg.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gkch5_a1m"/><path clip-rule="evenodd" class="j5118ebqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:bag-plus-solid"} {...others} />);
}

export default Component;
