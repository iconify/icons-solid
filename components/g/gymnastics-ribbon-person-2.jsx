import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wbotrfmvk.css';
import '../../css/n/n88g9ccyu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wbotrfmvk"/><path class="n88g9ccyu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:gymnastics-ribbon-person-2"} {...others} />);
}

export default Component;
