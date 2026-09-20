import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rl88n_b7j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rl88n_b7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:m3u-editor-dark"} {...others} />);
}

export default Component;
