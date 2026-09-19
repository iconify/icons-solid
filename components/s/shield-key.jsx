import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a-cu8w8vw.css';
import '../../css/z/zjso7bb3z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a-cu8w8vw"/><path class="zjso7bb3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shield-key"} {...others} />);
}

export default Component;
