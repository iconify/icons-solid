import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nj8l9tbqx.css';
import '../../css/v/vqd8c7baf.css';

const viewBox = {"width":15,"height":16};
const content = `<path class="nj8l9tbqx"/><path class="vqd8c7baf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:upload"} {...others} />);
}

export default Component;
