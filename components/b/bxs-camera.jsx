import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jlcke6kyc.css';
import '../../css/r/r4v-mt3za.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jlcke6kyc"/><path class="r4v-mt3za"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-camera"} {...others} />);
}

export default Component;
