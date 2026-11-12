import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt2kvac7n.css';
import '../../css/p/phq-p1_xp.css';
import '../../css/p/pnsl0jbnl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dt2kvac7n"/><path class="phq-p1_xp"/><path class="pnsl0jbnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sonarr"} {...others} />);
}

export default Component;
