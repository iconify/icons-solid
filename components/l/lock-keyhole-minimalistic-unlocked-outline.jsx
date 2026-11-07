import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5nlnvurm.css';
import '../../css/u/u70j8007s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y5nlnvurm"/><path clip-rule="evenodd" class="u70j8007s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lock-keyhole-minimalistic-unlocked-outline"} {...others} />);
}

export default Component;
