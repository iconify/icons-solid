import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gf65d6bwp.css';
import '../../css/h/hypvk6_jb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gf65d6bwp"/><path class="hypvk6_jb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:page-search"} {...others} />);
}

export default Component;
