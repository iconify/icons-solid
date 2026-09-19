import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h326ij1xk.css';
import '../../css/c/cugpv4b-s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h326ij1xk"/><path class="cugpv4b-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:digitalocean"} {...others} />);
}

export default Component;
