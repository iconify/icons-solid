import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1jccbn5h.css';
import '../../css/t/tmvilxb0i.css';
import '../../css/f/fnmjwhxeg.css';
import '../../css/n/n4-4ubchv.css';
import '../../css/k/kkfn5ab0r.css';
import '../../css/m/muy82sb_r.css';

const viewBox = {"width":256,"height":259};
const content = `<path class="u1jccbn5h"/><path class="tmvilxb0i"/><path class="fnmjwhxeg"/><path class="n4-4ubchv"/><path class="kkfn5ab0r"/><path class="muy82sb_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:discourse"} {...others} />);
}

export default Component;
