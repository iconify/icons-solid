import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/n44arpewq.css';
import '../../css/c/c6y59zbkx.css';
import '../../css/z/z7mdej9ht.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="n44arpewq wm-shadow"/><path class="c6y59zbkx wm-shadow"/><path class="z7mdej9ht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:rainbow"} {...others} />);
}

export default Component;
