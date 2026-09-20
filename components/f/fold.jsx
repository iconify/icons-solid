import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jocbzw1xx.css';
import '../../css/f/f9h36q24z.css';
import '../../css/e/ex0ms5b-c.css';
import '../../css/n/nepc0n-im.css';
import '../../css/d/doud3xbeg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jocbzw1xx"/><path class="f9h36q24z"/><path class="ex0ms5b-c"/><path class="nepc0n-im"/><path class="doud3xbeg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:fold"} {...others} />);
}

export default Component;
