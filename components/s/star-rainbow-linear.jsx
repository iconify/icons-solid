import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vfgrs0uwy.css';
import '../../css/u/upa9kfy6v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vfgrs0uwy"/><path class="upa9kfy6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-rainbow-linear"} {...others} />);
}

export default Component;
