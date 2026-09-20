import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d62f6o1xx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d62f6o1xx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:ai-science-spark-remix"} {...others} />);
}

export default Component;
