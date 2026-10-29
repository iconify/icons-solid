import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d46fbwvgh.css';
import '../../css/p/px9n_ccla.css';
import '../../css/c/cehy8zb5r.css';
import '../../css/v/vvgdygj0q.css';
import '../../css/a/a6w5jtbqo.css';
import '../../css/n/nj92-87ib.css';
import '../../css/r/r1k7rsbwf.css';
import '../../css/k/kk0lniw9x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d46fbwvgh wm-shadow"/><path class="px9n_ccla wm-k"/><path class="cehy8zb5r wm-k"/><path class="vvgdygj0q wm-k"/><path class="a6w5jtbqo wm-k"/><path class="nj92-87ib wm-k"/><path class="r1k7rsbwf wm-shine"/><path class="kk0lniw9x wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:ethernet-port"} {...others} />);
}

export default Component;
