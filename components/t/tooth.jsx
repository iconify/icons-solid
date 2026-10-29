import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b00hg7b4y.css';
import '../../css/q/qnp202bjf.css';
import '../../css/s/s54_gdtsv.css';
import '../../css/b/bri8cub0h.css';
import '../../css/u/u-rh0u51q.css';
import '../../css/l/l-ou69bhx.css';
import '../../css/q/q3jb0ebfz.css';
import '../../css/w/w2f3wwbve.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b00hg7b4y wm-shadow"/><path class="qnp202bjf"/><path class="s54_gdtsv"/><path class="bri8cub0h"/><path class="u-rh0u51q"/><path class="l-ou69bhx wm-shine"/><path class="q3jb0ebfz"/><path class="w2f3wwbve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:tooth"} {...others} />);
}

export default Component;
