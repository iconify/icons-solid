import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dk0r7efoy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dk0r7efoy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:square-outline"} {...others} />);
}

export default Component;
