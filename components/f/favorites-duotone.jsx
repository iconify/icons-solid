import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wit9n4b-r.css';
import '../../css/i/ig9_8-b5f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wit9n4b-r"/><path class="ig9_8-b5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:favorites-duotone"} {...others} />);
}

export default Component;
