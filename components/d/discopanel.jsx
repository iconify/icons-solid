import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fat3zh_ka.css';
import '../../css/p/pj0wk54iz.css';
import '../../css/p/pzqhllcuo.css';
import '../../css/b/b2v1umb_q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fat3zh_ka"/><path class="pj0wk54iz"/><path class="pzqhllcuo"/><path class="b2v1umb_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:discopanel"} {...others} />);
}

export default Component;
