import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bbxdvzjvn.css';
import '../../css/y/ypdia9bkn.css';
import '../../css/g/gxxk46bhj.css';
import '../../css/a/aeuiajbdn.css';
import '../../css/a/aycex6hon.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bbxdvzjvn"/><path clip-rule="evenodd" class="ypdia9bkn"/><path class="gxxk46bhj"/><path class="aeuiajbdn"/><path class="aycex6hon"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:cloud-down-print"} {...others} />);
}

export default Component;
