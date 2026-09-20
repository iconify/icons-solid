import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_u_3eq7z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z_u_3eq7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:resize-bottom-right"} {...others} />);
}

export default Component;
