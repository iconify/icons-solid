import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lf3h5acbj.css';
import '../../css/x/xz6zk-u5v.css';
import '../../css/l/l5rx36btv.css';

const viewBox = {"width":42,"height":32};
const content = `<g class="cuyn6tgcc"><path class="lf3h5acbj"/><path class="xz6zk-u5v"/><path class="l5rx36btv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:pricetags"} {...others} />);
}

export default Component;
