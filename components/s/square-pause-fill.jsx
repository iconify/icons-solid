import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcnue7btn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wcnue7btn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-pause-fill"} {...others} />);
}

export default Component;
