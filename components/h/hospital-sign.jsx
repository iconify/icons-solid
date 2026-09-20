import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pmf812bru.css';
import '../../css/s/snvlk93dn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pmf812bru"/><path class="snvlk93dn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:hospital-sign"} {...others} />);
}

export default Component;
