import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/re74k8eaa.css';
import '../../css/n/nquug4bon.css';
import '../../css/d/dh1if8bzc.css';
import '../../css/z/zlv857b-x.css';
import '../../css/l/l662jhb3d.css';
import '../../css/j/j8blkxn0m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="re74k8eaa"/><path class="nquug4bon"/><path class="dh1if8bzc"/><path class="zlv857b-x"/><path class="l662jhb3d"/><path class="j8blkxn0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:volleyball-bold"} {...others} />);
}

export default Component;
