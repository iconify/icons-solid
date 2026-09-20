import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tc44gabuo.css';
import '../../css/t/thlr6jb7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tc44gabuo"/><path class="thlr6jb7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:industry"} {...others} />);
}

export default Component;
