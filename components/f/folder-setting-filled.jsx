import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ymx794b5s.css';
import '../../css/h/h1_3onb4f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ymx794b5s"/><path class="h1_3onb4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:folder-setting-filled"} {...others} />);
}

export default Component;
