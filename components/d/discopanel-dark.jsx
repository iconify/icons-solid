import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udlhghb8a.css';
import '../../css/j/jmgoldbbr.css';
import '../../css/w/w3_bhfbqa.css';
import '../../css/b/b2v1umb_q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="udlhghb8a"/><path class="jmgoldbbr"/><path class="w3_bhfbqa"/><path class="b2v1umb_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:discopanel-dark"} {...others} />);
}

export default Component;
