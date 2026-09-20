import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkbfyf_pr.css';
import '../../css/m/md69zlb2k.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jkbfyf_pr"/><path class="md69zlb2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:location"} {...others} />);
}

export default Component;
