import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/abe4_nbce.css';
import '../../css/e/ecpcwmbmr.css';
import '../../css/l/la8qz22na.css';
import '../../css/r/rwwgm7bpd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="abe4_nbce"/><circle class="ecpcwmbmr"/><circle class="la8qz22na"/><path clip-rule="evenodd" class="rwwgm7bpd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:lol"} {...others} />);
}

export default Component;
