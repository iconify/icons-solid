import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jq35cqbxq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jq35cqbxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:red-paper-lantern"} {...others} />);
}

export default Component;
