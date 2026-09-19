import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8jlkgbbp.css';
import '../../css/p/p_mrm8qto.css';
import '../../css/o/oayagp0-d.css';
import '../../css/g/g13jgl9wr.css';
import '../../css/r/rv4dr434i.css';
import '../../css/x/xjl91t_xi.css';
import '../../css/j/j4mjgj17p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i8jlkgbbp"/><path class="p_mrm8qto"/><path class="oayagp0-d"/><path class="g13jgl9wr"/><path class="rv4dr434i"/><path class="xjl91t_xi"/><path class="j4mjgj17p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:no-smoking"} {...others} />);
}

export default Component;
