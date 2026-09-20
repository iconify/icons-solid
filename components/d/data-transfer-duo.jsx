import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jb-03yjgh.css';
import '../../css/g/gx9svumjw.css';
import '../../css/t/t8o-lknys.css';
import '../../css/u/u14a9ob4r.css';
import '../../css/f/fueubxbxc.css';
import '../../css/g/gczqv9bdj.css';
import '../../css/h/hm1wh2_tv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="jb-03yjgh"/><path class="gx9svumjw"/><path class="t8o-lknys"/><path class="u14a9ob4r"/><path class="fueubxbxc"/><path class="gczqv9bdj"/><path class="hm1wh2_tv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:data-transfer-duo"} {...others} />);
}

export default Component;
