import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tv7yabcbh.css';
import '../../css/t/t13q_mb5z.css';
import '../../css/r/r9_5sob_i.css';
import '../../css/b/b7yq6dbnh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tv7yabcbh"/><path class="t13q_mb5z"/><path class="r9_5sob_i"/><path class="b7yq6dbnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-word-dark"} {...others} />);
}

export default Component;
