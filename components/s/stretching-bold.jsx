import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l10h6cbda.css';
import '../../css/y/yv3sgvbaa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l10h6cbda"/><path clip-rule="evenodd" class="yv3sgvbaa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stretching-bold"} {...others} />);
}

export default Component;
