import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wl247z.css';
import '../../css/d/d-gf8qwu.css';
import '../../css/s/so-from-60.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wl247z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:cloud-alt-loop"} {...others} />);
}

export default Component;
