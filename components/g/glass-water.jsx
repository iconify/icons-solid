import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j07c7ccma.css';
import '../../css/w/w6gg31bji.css';
import '../../css/k/kmy9j711v.css';
import '../../css/c/c6dkwxbpy.css';
import '../../css/n/nku1uccgt.css';
import '../../css/n/nuye3he1f.css';
import '../../css/v/v0znqxbtf.css';
import '../../css/a/a8z_hh7xt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j07c7ccma wm-shadow"/><path class="w6gg31bji wm-k"/><path class="kmy9j711v wm-k"/><path class="c6dkwxbpy wm-k"/><path class="nku1uccgt wm-k"/><path class="nuye3he1f wm-k"/><path class="v0znqxbtf wm-shine"/><path class="a8z_hh7xt wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:glass-water"} {...others} />);
}

export default Component;
