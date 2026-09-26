import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v75x9gbll.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v75x9gbll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-top-outline"} {...others} />);
}

export default Component;
