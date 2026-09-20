import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a4l1h8beg.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="a4l1h8beg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:ai-technology-spark-solid"} {...others} />);
}

export default Component;
