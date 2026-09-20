import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jxxshtzvx.css';
import '../../css/m/mojdq78pj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jxxshtzvx"/><path class="mojdq78pj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:walk-fill"} {...others} />);
}

export default Component;
