import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3f_nlpyo.css';

const viewBox = {"width":462,"height":512};
const content = `<path class="f3f_nlpyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:webpack"} {...others} />);
}

export default Component;
