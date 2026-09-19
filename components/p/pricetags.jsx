import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkan-9bwk.css';
import '../../css/l/l307u0bel.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dkan-9bwk"/><path class="l307u0bel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:pricetags"} {...others} />);
}

export default Component;
