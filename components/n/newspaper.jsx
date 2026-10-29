import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pfmpvh6sc.css';
import '../../css/g/gr7b__mxd.css';
import '../../css/y/yh-bu38fx.css';
import '../../css/t/tyzbf5qjt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pfmpvh6sc wm-k"/><path class="gr7b__mxd wm-k"/><path class="wm-a yh-bu38fx"/><path class="tyzbf5qjt wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:newspaper"} {...others} />);
}

export default Component;
