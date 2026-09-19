import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/et4ql6hmn.css';

const viewBox = {"width":32,"height":32};
const content = `<path clip-rule="evenodd" class="et4ql6hmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:curly-loop"} {...others} />);
}

export default Component;
