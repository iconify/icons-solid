import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xtorcbczo.css';
import '../../css/r/rpb1ldb5s.css';
import '../../css/f/f_7w6zt4k.css';
import '../../css/a/abbn_8bhp.css';
import '../../css/h/hftm75boy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="xtorcbczo"/><ellipse class="rpb1ldb5s"/><path class="f_7w6zt4k"/><circle class="abbn_8bhp"/><circle class="hftm75boy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:monkey"} {...others} />);
}

export default Component;
