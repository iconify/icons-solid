import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lr168oaij.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lr168oaij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:arrow-left-fill"} {...others} />);
}

export default Component;
