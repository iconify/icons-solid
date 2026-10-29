import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihrukyb8a.css';
import '../../css/b/bio4c781y.css';
import '../../css/u/u9zxaeb-g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ihrukyb8a wm-k"/><path class="bio4c781y wm-k"/><path class="u9zxaeb-g wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:chevron-last"} {...others} />);
}

export default Component;
