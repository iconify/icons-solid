import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wckr9kb1z.css';
import '../../css/n/nb3lylbep.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wckr9kb1z"/><path class="nb3lylbep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-disc"} {...others} />);
}

export default Component;
