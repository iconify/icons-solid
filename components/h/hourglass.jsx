import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdhdh5hpt.css';
import '../../css/k/keuh4feao.css';
import '../../css/h/hu_cubcac.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rdhdh5hpt"/><path class="keuh4feao"/><path class="hu_cubcac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:hourglass"} {...others} />);
}

export default Component;
