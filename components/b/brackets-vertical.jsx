import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ja0nf1bzs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ja0nf1bzs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:brackets-vertical"} {...others} />);
}

export default Component;
