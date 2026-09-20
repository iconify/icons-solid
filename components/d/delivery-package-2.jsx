import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/c/ckqj84bxn.css';
import '../../css/n/nh9wu4w5t.css';
import '../../css/l/l7sq5fbem.css';
import '../../css/g/gzkgpl-oo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="ckqj84bxn"/><path class="nh9wu4w5t"/><path class="l7sq5fbem"/><path class="gzkgpl-oo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:delivery-package-2"} {...others} />);
}

export default Component;
