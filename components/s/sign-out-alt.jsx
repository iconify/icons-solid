import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkrt_z8cs.css';
import '../../css/k/kazlm8w_n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kkrt_z8cs"/><path class="kazlm8w_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:sign-out-alt"} {...others} />);
}

export default Component;
