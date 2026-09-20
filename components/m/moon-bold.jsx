import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/st7sd8ykf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="st7sd8ykf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:moon-bold"} {...others} />);
}

export default Component;
