import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ld8o_abgj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ld8o_abgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:aspect-ratio-fill"} {...others} />);
}

export default Component;
