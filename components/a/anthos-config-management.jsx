import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cybmyib3k.css';
import '../../css/r/rdoevbfyc.css';
import '../../css/i/im1u3sbac.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cybmyib3k"/><path class="rdoevbfyc"/><path class="im1u3sbac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:anthos-config-management"} {...others} />);
}

export default Component;
