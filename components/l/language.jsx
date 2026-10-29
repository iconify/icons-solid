import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hk_4ahm4b.css';
import '../../css/f/fvv8vzbvy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hk_4ahm4b wm-k"/><path class="fvv8vzbvy wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:language"} {...others} />);
}

export default Component;
