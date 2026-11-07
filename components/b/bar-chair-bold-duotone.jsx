import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fhgdmdlsz.css';
import '../../css/u/u-6gmvb1e.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fhgdmdlsz"/><path class="u-6gmvb1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bar-chair-bold-duotone"} {...others} />);
}

export default Component;
