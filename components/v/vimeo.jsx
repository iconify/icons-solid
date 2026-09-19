import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/td6uc1khz.css';

const viewBox = {"width":464,"height":456};
const content = `<path class="td6uc1khz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:vimeo"} {...others} />);
}

export default Component;
