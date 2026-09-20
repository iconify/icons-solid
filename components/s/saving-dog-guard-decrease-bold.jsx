import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/na-zfyb3o.css';
import '../../css/h/hj4s1e3-u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="na-zfyb3o"/><path class="hj4s1e3-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:saving-dog-guard-decrease-bold"} {...others} />);
}

export default Component;
