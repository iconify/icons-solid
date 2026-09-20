import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvq_hx_ln.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nvq_hx_ln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:opensuse-light"} {...others} />);
}

export default Component;
