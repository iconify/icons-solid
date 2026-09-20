import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fv4va0_8o.css';
import '../../css/l/lf01q5b9h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fv4va0_8o"/><path class="lf01q5b9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:aiming-line"} {...others} />);
}

export default Component;
