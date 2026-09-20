import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pyse1pb9f.css';
import '../../css/i/in6zz_blz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pyse1pb9f"/><path class="in6zz_blz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:money-bag-dollar"} {...others} />);
}

export default Component;
