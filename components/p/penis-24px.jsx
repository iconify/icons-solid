import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/it7z-_d_u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="it7z-_d_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:penis-24px"} {...others} />);
}

export default Component;
