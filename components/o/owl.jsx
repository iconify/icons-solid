import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/f/f_i-55w-x.css';
import '../../css/k/kl6xp4spr.css';
import '../../css/a/a31hkfdiu.css';
import '../../css/i/iahmlcbgz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="f_i-55w-x"/><path class="kl6xp4spr"/><circle class="a31hkfdiu"/><circle class="iahmlcbgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:owl"} {...others} />);
}

export default Component;
