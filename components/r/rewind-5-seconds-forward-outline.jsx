import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s567sdlaf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s567sdlaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rewind-5-seconds-forward-outline"} {...others} />);
}

export default Component;
