import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k9lkykbai.css';
import '../../css/p/pj1dodgri.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k9lkykbai"/><path class="pj1dodgri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:water-bold-duotone"} {...others} />);
}

export default Component;
