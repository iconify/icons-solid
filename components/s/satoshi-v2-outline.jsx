import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ehem8xbsl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ehem8xbsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:satoshi-v2-outline"} {...others} />);
}

export default Component;
