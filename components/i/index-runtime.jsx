import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eyo412_1k.css';
import '../../css/l/l40lmxbfq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="eyo412_1k"/><path class="l40lmxbfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:index-runtime"} {...others} />);
}

export default Component;
