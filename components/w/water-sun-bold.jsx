import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dth18jb_c.css';
import '../../css/b/bx1khacep.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dth18jb_c"/><path class="bx1khacep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:water-sun-bold"} {...others} />);
}

export default Component;
