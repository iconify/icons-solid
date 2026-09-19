import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkzyz0b-d.css';
import '../../css/u/u9h8d2d_j.css';
import '../../css/o/oh7fmbq9r.css';
import '../../css/d/d37t4ibym.css';
import '../../css/w/wcxel2c8v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gkzyz0b-d"/><path class="u9h8d2d_j"/><path class="oh7fmbq9r"/><path class="d37t4ibym"/><path class="wcxel2c8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:fingerprint-recognition"} {...others} />);
}

export default Component;
