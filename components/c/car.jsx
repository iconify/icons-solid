import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvb8-3kxm.css';
import '../../css/z/zyi21ccro.css';
import '../../css/a/acldr0b1s.css';
import '../../css/p/p2a9m_-0g.css';
import '../../css/b/bmekwzbyd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rvb8-3kxm"/><path class="zyi21ccro"/><path class="acldr0b1s"/><path class="p2a9m_-0g"/><path class="bmekwzbyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:car"} {...others} />);
}

export default Component;
