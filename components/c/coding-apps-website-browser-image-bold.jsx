import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-j0n3bur.css';
import '../../css/w/wiiuo4b2r.css';
import '../../css/o/o93m4pe9c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e-j0n3bur"/><path class="wiiuo4b2r"/><path class="o93m4pe9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:coding-apps-website-browser-image-bold"} {...others} />);
}

export default Component;
