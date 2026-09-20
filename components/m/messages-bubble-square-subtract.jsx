import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yi9eumbcn.css';
import '../../css/a/a42slabgh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yi9eumbcn"/><path class="a42slabgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:messages-bubble-square-subtract"} {...others} />);
}

export default Component;
