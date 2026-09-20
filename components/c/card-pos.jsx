import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ijvh1tbsh.css';
import '../../css/y/yssl9cbvj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ijvh1tbsh"/><path class="yssl9cbvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:card-pos"} {...others} />);
}

export default Component;
