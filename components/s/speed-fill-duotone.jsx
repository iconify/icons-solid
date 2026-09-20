import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1oekvo1u.css';
import '../../css/y/y54-3102d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j1oekvo1u"/><path clip-rule="evenodd" class="y54-3102d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:speed-fill-duotone"} {...others} />);
}

export default Component;
