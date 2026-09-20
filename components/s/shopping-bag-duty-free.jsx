import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/th-j5ed0o.css';
import '../../css/x/x2yuxabkk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="th-j5ed0o"/><path class="x2yuxabkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shopping-bag-duty-free"} {...others} />);
}

export default Component;
