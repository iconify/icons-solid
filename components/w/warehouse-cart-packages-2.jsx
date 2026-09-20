import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lxc15igcy.css';
import '../../css/p/pial3gbkj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lxc15igcy"/><path class="pial3gbkj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:warehouse-cart-packages-2"} {...others} />);
}

export default Component;
