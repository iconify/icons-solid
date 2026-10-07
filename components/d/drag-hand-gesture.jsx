import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v7svy8bvx.css';
import '../../css/z/zilprabad.css';
import '../../css/b/b92w5yz7y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v7svy8bvx"/><path class="zilprabad"/><path class="b92w5yz7y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:drag-hand-gesture"} {...others} />);
}

export default Component;
