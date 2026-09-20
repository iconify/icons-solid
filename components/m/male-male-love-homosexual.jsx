import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/n/nw8x2uj-h.css';
import '../../css/h/hoxvfi_md.css';
import '../../css/t/tf30wxmwp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="nw8x2uj-h"/><path class="hoxvfi_md"/><path class="tf30wxmwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:male-male-love-homosexual"} {...others} />);
}

export default Component;
