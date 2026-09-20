import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8_uazbck.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c8_uazbck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:times-circle"} {...others} />);
}

export default Component;
