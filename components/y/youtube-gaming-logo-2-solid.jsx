import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u624y-kis.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="u624y-kis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:youtube-gaming-logo-2-solid"} {...others} />);
}

export default Component;
