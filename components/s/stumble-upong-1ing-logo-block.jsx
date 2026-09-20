import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0l6w_fxc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s0l6w_fxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:stumble-upong-1ing-logo-block"} {...others} />);
}

export default Component;
