import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2_v7mbej.css';
import '../../css/c/c2qxqnb8p.css';
import '../../css/h/h6l-atboe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v2_v7mbej"/><path class="c2qxqnb8p"/><rect class="h6l-atboe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:home-duotone"} {...others} />);
}

export default Component;
