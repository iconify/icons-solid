import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w8hl5_b3j.css';
import '../../css/m/mi2k0o4ke.css';
import '../../css/c/c-hwskhdt.css';
import '../../css/a/a8dmkubxd.css';
import '../../css/g/grb_exbvn.css';
import '../../css/h/hwhzd7b5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w8hl5_b3j"/><path class="mi2k0o4ke"/><path class="c-hwskhdt"/><path class="a8dmkubxd"/><path class="grb_exbvn"/><path class="hwhzd7b5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:medium-new-logo"} {...others} />);
}

export default Component;
