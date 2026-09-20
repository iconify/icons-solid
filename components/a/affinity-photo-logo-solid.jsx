import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3b_m5t_k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t3b_m5t_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:affinity-photo-logo-solid"} {...others} />);
}

export default Component;
