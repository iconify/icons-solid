import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i29sy8rki.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i29sy8rki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:arrow-up-line"} {...others} />);
}

export default Component;
