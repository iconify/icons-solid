import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqb812bom.css';
import '../../css/p/ph6nbhfkp.css';
import '../../css/h/hgj6s0-wz.css';
import '../../css/b/bodq3cb3i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tqb812bom"/><path class="ph6nbhfkp"/><path class="hgj6s0-wz"/><path class="bodq3cb3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tangerine-ui"} {...others} />);
}

export default Component;
