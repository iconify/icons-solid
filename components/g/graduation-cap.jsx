import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zndmembks.css';
import '../../css/p/pe8o9vbqj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zndmembks"/><path class="pe8o9vbqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:graduation-cap"} {...others} />);
}

export default Component;
