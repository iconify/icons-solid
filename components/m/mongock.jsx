import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lyt9-sb9b.css';
import '../../css/p/penv9lb5j.css';
import '../../css/m/m1hgx9ntx.css';
import '../../css/u/upa9vcbvf.css';
import '../../css/x/xmk0yknes.css';
import '../../css/s/skk1shfyp.css';
import '../../css/c/c5s_mibno.css';
import '../../css/b/b6aszybqn.css';
import '../../css/p/pf3n8qo0h.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="lyt9-sb9b"/><path class="penv9lb5j"/><path class="m1hgx9ntx"/><path class="upa9vcbvf"/><path class="xmk0yknes"/><path class="skk1shfyp"/><path class="c5s_mibno"/><path class="b6aszybqn"/><path class="pf3n8qo0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:mongock"} {...others} />);
}

export default Component;
