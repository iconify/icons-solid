import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g9hvhxbgm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g9hvhxbgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:arrow-up-wide-narrow-line"} {...others} />);
}

export default Component;
