import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tuqw8uppp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tuqw8uppp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:sort-descending-fill"} {...others} />);
}

export default Component;
