import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x2s-ghbes.css';
import '../../css/l/ljsts9kya.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x2s-ghbes"/><path class="ljsts9kya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:hierarchy"} {...others} />);
}

export default Component;
