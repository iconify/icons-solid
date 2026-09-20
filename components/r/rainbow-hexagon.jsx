import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wbvbzfbwo.css';
import '../../css/d/dz5rcnzjx.css';
import '../../css/f/fb04lm02e.css';
import '../../css/l/l2eez9j-u.css';
import '../../css/b/bbx7nf83y.css';
import '../../css/d/dwpbpn69e.css';
import '../../css/x/x1mdp195q.css';

const viewBox = {"width":72,"height":72};
const content = `<g clip-rule="evenodd" class="d2kvgvbvc"><path class="wbvbzfbwo"/><path class="dz5rcnzjx"/><path class="fb04lm02e"/><path class="l2eez9j-u"/><path class="bbx7nf83y"/><path class="dwpbpn69e"/></g><path class="x1mdp195q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:rainbow-hexagon"} {...others} />);
}

export default Component;
