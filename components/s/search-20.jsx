import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jsx9bkbtz.css';
import '../../css/b/bqcr30b7g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jsx9bkbtz"/><path class="bqcr30b7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:search-20"} {...others} />);
}

export default Component;
