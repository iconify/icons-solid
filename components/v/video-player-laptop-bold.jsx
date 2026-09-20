import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f53is0bjt.css';
import '../../css/a/an4vz7evy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f53is0bjt"/><path class="an4vz7evy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:video-player-laptop-bold"} {...others} />);
}

export default Component;
