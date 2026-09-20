import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iitdx4b4n.css';
import '../../css/e/egm87yb8i.css';
import '../../css/o/oen_blbax.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iitdx4b4n"/><path class="egm87yb8i"/><path class="oen_blbax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:domain-monitor-light"} {...others} />);
}

export default Component;
