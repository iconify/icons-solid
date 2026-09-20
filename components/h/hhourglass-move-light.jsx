import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hb6_k0b5d.css';
import '../../css/w/w22h5lbit.css';
import '../../css/b/bpypuqqif.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hb6_k0b5d"/><path class="w22h5lbit"/><path class="bpypuqqif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:hhourglass-move-light"} {...others} />);
}

export default Component;
