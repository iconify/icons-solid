import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gvcu8c84i.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="gvcu8c84i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:ai-generate-music-spark-remix"} {...others} />);
}

export default Component;
