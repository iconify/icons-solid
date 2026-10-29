import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fu3w3jb7k.css';
import '../../css/m/mlwmtvupa.css';
import '../../css/g/gp72wnvfc.css';
import '../../css/o/o0gdb2b6n.css';
import '../../css/u/ut5ynnbwh.css';
import '../../css/g/ge29iuv1p.css';
import '../../css/x/x2ay-zrvh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fu3w3jb7k wm-shadow"/><path class="mlwmtvupa wm-k"/><path class="gp72wnvfc wm-k"/><path class="o0gdb2b6n wm-k"/><path class="ut5ynnbwh wm-k"/><path class="ge29iuv1p wm-k"/><path class="wm-shine x2ay-zrvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:rewind"} {...others} />);
}

export default Component;
