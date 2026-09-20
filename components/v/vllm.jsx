import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kb2zfhboo.css';
import '../../css/k/k7g135buj.css';
import '../../css/o/ox2d_gpql.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kb2zfhboo"/><path class="k7g135buj"/><path class="ox2d_gpql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:vllm"} {...others} />);
}

export default Component;
