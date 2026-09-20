import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbdsq-yur.css';
import '../../css/w/w22rijbep.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mbdsq-yur"/><path class="w22rijbep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:pic-2-line"} {...others} />);
}

export default Component;
