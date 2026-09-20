import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-6yb6bfg.css';
import '../../css/x/xxr0q9bom.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i-6yb6bfg"/><path class="xxr0q9bom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:cache-24"} {...others} />);
}

export default Component;
