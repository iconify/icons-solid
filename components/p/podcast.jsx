import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6l-9rbeg.css';
import '../../css/h/hfczz8xtc.css';
import '../../css/z/z8ajtfwob.css';
import '../../css/v/vmomwybeh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o6l-9rbeg wm-a"/><path class="hfczz8xtc wm-a"/><path class="wm-k z8ajtfwob"/><path class="vmomwybeh wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:podcast"} {...others} />);
}

export default Component;
