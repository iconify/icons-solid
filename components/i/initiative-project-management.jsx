import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dee-53fyq.css';
import '../../css/p/pjju7xbqy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dee-53fyq"/><path class="pjju7xbqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:initiative-project-management"} {...others} />);
}

export default Component;
