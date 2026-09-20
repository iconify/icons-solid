import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8s_muoev.css';
import '../../css/o/oyijh1kdw.css';

const viewBox = {"width":670,"height":124};
const content = `<path class="r8s_muoev"/><path class="oyijh1kdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mitsubishi-heavy"} {...others} />);
}

export default Component;
