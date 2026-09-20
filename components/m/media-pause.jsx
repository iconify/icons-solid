import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/darunjbpi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="darunjbpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:media-pause"} {...others} />);
}

export default Component;
