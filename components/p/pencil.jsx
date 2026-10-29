import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ptgpoka5c.css';
import '../../css/j/jqj7qt63o.css';
import '../../css/x/x4y2t9r2x.css';
import '../../css/y/y869nyb3b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ptgpoka5c wm-k"/><path class="jqj7qt63o wm-a"/><path class="wm-k x4y2t9r2x"/><path class="wm-k y869nyb3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:pencil"} {...others} />);
}

export default Component;
