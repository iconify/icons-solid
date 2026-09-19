import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mjfamlzye.css';
import '../../css/l/llpy5ldsx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mjfamlzye"/><path class="llpy5ldsx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:cpu"} {...others} />);
}

export default Component;
