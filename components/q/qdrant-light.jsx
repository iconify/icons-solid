import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2gmwachp.css';
import '../../css/q/qs06oviiv.css';
import '../../css/l/lhdmhjbww.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u2gmwachp"/><path class="qs06oviiv"/><path class="lhdmhjbww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:qdrant-light"} {...others} />);
}

export default Component;
