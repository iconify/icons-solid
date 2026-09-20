import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewvl3nb8h.css';
import '../../css/v/vn8vinb_c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ewvl3nb8h"/><path clip-rule="evenodd" class="vn8vinb_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:www"} {...others} />);
}

export default Component;
