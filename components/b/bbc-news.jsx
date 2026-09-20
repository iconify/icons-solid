import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qik18r02u.css';
import '../../css/j/jxi1ylssz.css';
import '../../css/p/p3j752dkn.css';
import '../../css/s/s01r7qvek.css';

const viewBox = {"width":400,"height":300};
const content = `<path class="qik18r02u"/><path class="jxi1ylssz"/><path class="p3j752dkn"/><path class="s01r7qvek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:bbc-news"} {...others} />);
}

export default Component;
