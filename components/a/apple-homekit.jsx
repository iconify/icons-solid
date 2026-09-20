import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cg5j7n9re.css';
import '../../css/z/z_89wg1-o.css';
import '../../css/p/pnrrn11uc.css';
import '../../css/e/eil3eqh2u.css';
import '../../css/h/hfw2nxbqa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cg5j7n9re"/><path class="z_89wg1-o"/><path class="pnrrn11uc"/><path class="eil3eqh2u"/><path class="hfw2nxbqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:apple-homekit"} {...others} />);
}

export default Component;
