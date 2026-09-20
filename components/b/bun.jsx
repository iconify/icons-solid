import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7od4acxn.css';
import '../../css/a/ajnodhidn.css';
import '../../css/s/st_6hwhru.css';
import '../../css/p/pk1fniwsv.css';
import '../../css/l/lrogzo78k.css';
import '../../css/m/mg9e_xmdf.css';
import '../../css/n/n48__p1dg.css';
import '../../css/y/y_we9mn6e.css';
import '../../css/f/f60ljrbnb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="p7od4acxn"/><path class="ajnodhidn"/><ellipse class="st_6hwhru"/><ellipse class="pk1fniwsv"/><circle class="lrogzo78k"/><circle class="mg9e_xmdf"/><path class="n48__p1dg"/><circle class="y_we9mn6e"/><circle class="f60ljrbnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:bun"} {...others} />);
}

export default Component;
