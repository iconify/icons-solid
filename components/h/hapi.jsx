import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/koj92m8jb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="koj92m8jb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:hapi"} {...others} />);
}

export default Component;
