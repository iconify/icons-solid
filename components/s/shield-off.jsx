import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-jo9vf3p.css';
import '../../css/d/dsm-cgb4h.css';
import '../../css/f/foipgeybq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k-jo9vf3p wm-k"/><path class="dsm-cgb4h wm-k"/><path class="foipgeybq wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:shield-off"} {...others} />);
}

export default Component;
