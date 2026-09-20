import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pfsfc7bfp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pfsfc7bfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:ice-cream-2"} {...others} />);
}

export default Component;
