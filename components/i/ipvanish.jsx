import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/plrm2twbs.css';
import '../../css/k/ku0zhsboo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="plrm2twbs"/><path class="ku0zhsboo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ipvanish"} {...others} />);
}

export default Component;
