import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pam3jz.css';
import '../../css/y/ydovum.css';
import '../../css/l/lg8jeu.css';
import '../../css/y/yi8b0f.css';
import '../../css/f/fill-to-1.css';
import '../../css/f/fill-to-0.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-from-30.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pam3jz ydovum"/><path class="lg8jeu ydovum"/><path class="yi8b0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:heart-twotone-half-filled"} {...others} />);
}

export default Component;
