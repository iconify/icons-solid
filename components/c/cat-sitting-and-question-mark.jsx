import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jg8vo_0ux.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="jg8vo_0ux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:cat-sitting-and-question-mark"} {...others} />);
}

export default Component;
