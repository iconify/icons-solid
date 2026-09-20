import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bd05r9bdf.css';
import '../../css/k/k0hxhqbwo.css';
import '../../css/r/ralef_bab.css';
import '../../css/z/zqhekobbq.css';
import '../../css/h/hb1lhlb1y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bd05r9bdf"/><path class="k0hxhqbwo"/><circle class="ralef_bab"/><path class="zqhekobbq"/><path class="hb1lhlb1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:figma"} {...others} />);
}

export default Component;
