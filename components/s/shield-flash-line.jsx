import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0ygf8bte.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z0ygf8bte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:shield-flash-line"} {...others} />);
}

export default Component;
