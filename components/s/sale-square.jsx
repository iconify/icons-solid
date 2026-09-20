import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f449yyyyz.css';
import '../../css/d/d0rd-cgvn.css';
import '../../css/k/kuka9vbtd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="f449yyyyz"/><path clip-rule="evenodd" class="d0rd-cgvn"/><path clip-rule="evenodd" class="kuka9vbtd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sale-square"} {...others} />);
}

export default Component;
