import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tob1thbir.css';
import '../../css/a/a7pqz9q8z.css';
import '../../css/y/y9mg2tbzu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tob1thbir"/><path class="a7pqz9q8z"/><path class="y9mg2tbzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:credit-card-check-48-bold"} {...others} />);
}

export default Component;
