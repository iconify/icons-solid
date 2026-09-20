import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i8fe58bnw.css';
import '../../css/z/zxuf1gbdu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i8fe58bnw"/><path class="zxuf1gbdu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:user-cash-scale"} {...others} />);
}

export default Component;
