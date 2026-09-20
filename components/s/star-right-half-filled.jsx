import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dcst-z.css';
import '../../css/n/n5xegl.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-from-34.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dcst-z"/><path class="n5xegl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:star-right-half-filled"} {...others} />);
}

export default Component;
