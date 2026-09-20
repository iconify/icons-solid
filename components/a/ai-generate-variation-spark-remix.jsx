import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ywa31bcfs.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="ywa31bcfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:ai-generate-variation-spark-remix"} {...others} />);
}

export default Component;
