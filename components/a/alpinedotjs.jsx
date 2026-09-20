import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2s84ct4s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r2s84ct4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:alpinedotjs"} {...others} />);
}

export default Component;
