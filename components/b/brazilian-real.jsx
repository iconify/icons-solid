import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpl5qy6cx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jpl5qy6cx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:brazilian-real"} {...others} />);
}

export default Component;
