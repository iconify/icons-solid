import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/al7hf0ijn.css';
import '../../css/p/p5oxreb1k.css';
import '../../css/q/qyivhdcvp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="al7hf0ijn"/><path class="p5oxreb1k"/><path class="qyivhdcvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:documentation"} {...others} />);
}

export default Component;
