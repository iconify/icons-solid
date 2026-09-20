import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1asp8k8y.css';
import '../../css/m/moh8knr5n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h1asp8k8y"/><path class="moh8knr5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:browse-gallery-filled"} {...others} />);
}

export default Component;
