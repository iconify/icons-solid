import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/e/exmqpbbns.css';
import '../../css/b/b5jgdnp5j.css';
import '../../css/s/squ5f254c.css';
import '../../css/c/czn2-cbwf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="exmqpbbns"/><path class="b5jgdnp5j wm-k"/><path class="squ5f254c wm-a"/><path class="czn2-cbwf wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:utensils-crossed"} {...others} />);
}

export default Component;
