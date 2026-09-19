import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vn7uv1b9z.css';
import '../../css/e/eqckd4mok.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vn7uv1b9z"/><path class="eqckd4mok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:thumbsup"} {...others} />);
}

export default Component;
