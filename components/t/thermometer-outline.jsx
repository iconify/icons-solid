import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cyjboy1lu.css';
import '../../css/w/w72z5bcvg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cyjboy1lu"/><path clip-rule="evenodd" class="w72z5bcvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:thermometer-outline"} {...others} />);
}

export default Component;
