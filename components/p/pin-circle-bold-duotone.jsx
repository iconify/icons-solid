import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvqe86bhm.css';
import '../../css/i/ibf2r7bew.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jvqe86bhm"/><path class="ibf2r7bew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pin-circle-bold-duotone"} {...others} />);
}

export default Component;
