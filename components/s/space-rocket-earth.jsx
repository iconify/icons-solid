import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j572khtuf.css';
import '../../css/g/g0i07hw0j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j572khtuf"/><path class="g0i07hw0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:space-rocket-earth"} {...others} />);
}

export default Component;
