import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9n6u8b7u.css';
import '../../css/n/nlmny6bfj.css';
import '../../css/v/vuw91fa1l.css';
import '../../css/e/exs6scbnc.css';
import '../../css/m/mqxvrjcit.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q9n6u8b7u"/><path class="nlmny6bfj"/><path class="vuw91fa1l"/><path class="exs6scbnc"/><path class="mqxvrjcit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:glm-v"} {...others} />);
}

export default Component;
