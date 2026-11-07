import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umc82qbvq.css';
import '../../css/t/t2kvkybac.css';
import '../../css/f/f8wpv707a.css';
import '../../css/c/c3z1ew94m.css';
import '../../css/o/oatad_hxj.css';
import '../../css/l/l2v1mzjoq.css';
import '../../css/c/cwgqqwvej.css';
import '../../css/v/v9zz0vlsq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="umc82qbvq"/><path clip-rule="evenodd" class="t2kvkybac"/><path class="f8wpv707a"/><path class="c3z1ew94m"/><path class="oatad_hxj"/><path class="l2v1mzjoq"/><path class="cwgqqwvej"/><path class="v9zz0vlsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tornado-small-bold"} {...others} />);
}

export default Component;
