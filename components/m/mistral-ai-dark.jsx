import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7bquwqpi.css';
import '../../css/q/qkxrw7b9o.css';
import '../../css/z/zgu501b7w.css';
import '../../css/i/i5ginn9ff.css';
import '../../css/r/rqvlhza_d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a7bquwqpi"/><path class="qkxrw7b9o"/><path class="zgu501b7w"/><path class="i5ginn9ff"/><path class="rqvlhza_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mistral-ai-dark"} {...others} />);
}

export default Component;
