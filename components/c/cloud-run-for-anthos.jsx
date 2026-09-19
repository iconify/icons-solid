import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hec1o9hrf.css';
import '../../css/a/ablh-jbqo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hec1o9hrf"/><path class="ablh-jbqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-run-for-anthos"} {...others} />);
}

export default Component;
