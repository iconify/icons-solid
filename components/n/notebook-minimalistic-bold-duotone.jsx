import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5rfkzb2n.css';
import '../../css/x/xp2l2gs6v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n5rfkzb2n"/><path class="xp2l2gs6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notebook-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
