import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cz7v9cbjg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cz7v9cbjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:part-alternation-mark"} {...others} />);
}

export default Component;
