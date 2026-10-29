import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wzkrhxb8m.css';
import '../../css/r/rwxnmqb4i.css';
import '../../css/y/ye3obsogn.css';
import '../../css/x/xewjnac0q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-a wzkrhxb8m"/><path class="rwxnmqb4i wm-a"/><path class="wm-a ye3obsogn"/><path class="wm-a xewjnac0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:film"} {...others} />);
}

export default Component;
