import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vf1lmlcvy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vf1lmlcvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:orderly"} {...others} />);
}

export default Component;
