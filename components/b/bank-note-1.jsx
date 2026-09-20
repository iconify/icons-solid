import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/k/k55c0si5c.css';
import '../../css/m/mirqvk4_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="k55c0si5c"/><path class="mirqvk4_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:bank-note-1"} {...others} />);
}

export default Component;
