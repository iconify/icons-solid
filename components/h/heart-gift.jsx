import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/rho2ymbkp.css';
import '../../css/f/fkkfai8ng.css';
import '../../css/a/a4jd90b6c.css';
import '../../css/u/ujg8gdbdu.css';
import '../../css/k/k6aezdfki.css';
import '../../css/z/z9z1drm7q.css';
import '../../css/c/cvgzes2sl.css';
import '../../css/j/jpwt93nyy.css';
import '../../css/r/r186s1bzo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="rho2ymbkp wm-shadow"/><path class="fkkfai8ng"/><path class="a4jd90b6c"/><path class="ujg8gdbdu"/><path class="k6aezdfki"/><path class="z9z1drm7q"/><path class="cvgzes2sl wm-s"/><path class="jpwt93nyy wm-s"/><path class="r186s1bzo wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:heart-gift"} {...others} />);
}

export default Component;
