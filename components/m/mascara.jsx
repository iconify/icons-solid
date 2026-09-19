import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/i/i7u8toydg.css';
import '../../css/o/ol7_s0b0o.css';
import '../../css/b/b_7l_gehd.css';
import '../../css/f/fjzj49bus.css';
import '../../css/u/uzitapbbu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG66hx0bKT"><g class="gopnm44um"><path class="i7u8toydg"/><path class="ol7_s0b0o"/><path class="b_7l_gehd"/><path class="fjzj49bus"/><path class="uzitapbbu"/></g></mask></defs><path mask="url(#SVG66hx0bKT)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:mascara"} {...others} />);
}

export default Component;
