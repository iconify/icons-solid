import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ljd3w-lru.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="ljd3w-lru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:italic-solid"} {...others} />);
}

export default Component;
