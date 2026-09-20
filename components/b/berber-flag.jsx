import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcpth-wqs.css';
import '../../css/c/c87urq4yy.css';
import '../../css/r/ryuchjvkn.css';
import '../../css/z/z8ntjqb8q.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wcpth-wqs"/><path class="c87urq4yy"/><path class="ryuchjvkn"/><path class="z8ntjqb8q"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:berber-flag"} {...others} />);
}

export default Component;
