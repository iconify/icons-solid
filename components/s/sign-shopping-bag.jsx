import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/l/lgtpsebmf.css';
import '../../css/h/hwwoa8bbj.css';
import '../../css/p/psn4a2b6x.css';
import '../../css/m/mpbbl1bet.css';
import '../../css/n/ntckzhbfk.css';
import '../../css/o/o1xk_fb5y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="lgtpsebmf"/><path class="hwwoa8bbj"/><path class="psn4a2b6x"/><path class="mpbbl1bet"/><path class="ntckzhbfk"/><path class="o1xk_fb5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:sign-shopping-bag"} {...others} />);
}

export default Component;
