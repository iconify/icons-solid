import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z42gu4bcz.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="z42gu4bcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:ai-technology-spark-remix"} {...others} />);
}

export default Component;
