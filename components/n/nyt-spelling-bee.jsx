import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qedz3ihgl.css';
import '../../css/v/vr-z-kb2v.css';
import '../../css/e/eg9qh-kkg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qedz3ihgl"/><ellipse class="vr-z-kb2v"/><path class="eg9qh-kkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nyt-spelling-bee"} {...others} />);
}

export default Component;
