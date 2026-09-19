import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q37h1n4jn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="q37h1n4jn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:type-h5"} {...others} />);
}

export default Component;
