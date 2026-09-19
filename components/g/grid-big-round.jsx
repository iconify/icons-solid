import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w336_2pbb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w336_2pbb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:grid-big-round"} {...others} />);
}

export default Component;
