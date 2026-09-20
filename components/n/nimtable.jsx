import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g406apbwa.css';
import '../../css/z/z0xba_bvq.css';
import '../../css/t/tb99jab_j.css';
import '../../css/n/n4fc89box.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g406apbwa"/><path class="z0xba_bvq"/><path class="tb99jab_j"/><path class="n4fc89box"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nimtable"} {...others} />);
}

export default Component;
