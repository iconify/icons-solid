import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5axhacgi.css';
import '../../css/l/lmu4qk5wf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="a5axhacgi"/><path clip-rule="evenodd" class="lmu4qk5wf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:faq-16"} {...others} />);
}

export default Component;
