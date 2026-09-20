import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/psek57b4e.css';
import '../../css/w/wwlr736nn.css';
import '../../css/u/uvw5zlbqi.css';
import '../../css/v/v2d1uib7g.css';
import '../../css/f/fo5m_pk5t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="psek57b4e"/><path class="wwlr736nn"/><circle class="uvw5zlbqi"/><path class="v2d1uib7g"/><path class="fo5m_pk5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:figma-dark"} {...others} />);
}

export default Component;
