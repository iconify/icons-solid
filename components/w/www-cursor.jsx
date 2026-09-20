import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9z2gwbot.css';
import '../../css/c/czgjawueq.css';
import '../../css/g/gbe5vwbih.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j9z2gwbot"/><path class="czgjawueq"/><path clip-rule="evenodd" class="gbe5vwbih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:www-cursor"} {...others} />);
}

export default Component;
