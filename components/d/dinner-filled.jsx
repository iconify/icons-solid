import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mg-8bfyph.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mg-8bfyph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:dinner-filled"} {...others} />);
}

export default Component;
