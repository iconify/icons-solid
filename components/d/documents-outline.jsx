import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b48_ecc_g.css';
import '../../css/x/x01waj_-c.css';
import '../../css/b/ba80-obkp.css';
import '../../css/z/zgr1wqj3d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b48_ecc_g"/><path class="x01waj_-c"/><path class="ba80-obkp"/><path class="zgr1wqj3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:documents-outline"} {...others} />);
}

export default Component;
