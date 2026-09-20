import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/la6-9sbyx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="la6-9sbyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:ticker-star"} {...others} />);
}

export default Component;
