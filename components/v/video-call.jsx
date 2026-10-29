import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bu4speh-f.css';
import '../../css/w/w89bx5biq.css';
import '../../css/l/l5bbw4b8q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bu4speh-f wm-k"/><path class="w89bx5biq wm-a"/><path class="l5bbw4b8q wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:video-call"} {...others} />);
}

export default Component;
