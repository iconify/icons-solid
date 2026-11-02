import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-jy4_bfh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q-jy4_bfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:to-do-fill"} {...others} />);
}

export default Component;
