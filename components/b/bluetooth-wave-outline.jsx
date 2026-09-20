import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sb6shej8z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sb6shej8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bluetooth-wave-outline"} {...others} />);
}

export default Component;
