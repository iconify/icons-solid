import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/h/hj8fx5rdo.css';
import '../../css/r/rcncnkwrd.css';
import '../../css/o/ojw_40bmw.css';
import '../../css/k/kcwsz79ph.css';
import '../../css/g/g3d0sd4xn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="hj8fx5rdo"/><path class="rcncnkwrd"/><rect class="ojw_40bmw"/><path class="kcwsz79ph"/><path class="g3d0sd4xn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:locking-computer"} {...others} />);
}

export default Component;
