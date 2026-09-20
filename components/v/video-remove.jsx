import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zv9ww4u1l.css';
import '../../css/l/l0tx67liw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zv9ww4u1l"/><path class="l0tx67liw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:video-remove"} {...others} />);
}

export default Component;
