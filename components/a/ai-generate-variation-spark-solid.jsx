import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1yt1nbnj.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="o1yt1nbnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:ai-generate-variation-spark-solid"} {...others} />);
}

export default Component;
