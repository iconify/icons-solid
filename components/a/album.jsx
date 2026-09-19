import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y07wqubtc.css';
import '../../css/w/wckr9kb1z.css';
import '../../css/h/hd5qmml4t.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="y07wqubtc"/><path class="wckr9kb1z"/><path class="hd5qmml4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:album"} {...others} />);
}

export default Component;
