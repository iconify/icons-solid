import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q28vt0hbh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q28vt0hbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:croissant-fill"} {...others} />);
}

export default Component;
