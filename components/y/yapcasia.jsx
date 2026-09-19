import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6i3yx5qo.css';

const viewBox = {"width":800,"height":702};
const content = `<path class="e6i3yx5qo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:yapcasia"} {...others} />);
}

export default Component;
