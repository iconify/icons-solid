import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n994l0bwh.css';
import '../../css/m/m8oedpi-c.css';
import '../../css/c/cv53nesno.css';
import '../../css/d/doinghttg.css';
import '../../css/p/p6pn5jkia.css';
import '../../css/z/zyhaih_og.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n994l0bwh"/><path class="m8oedpi-c"/><path class="cv53nesno"/><path class="doinghttg"/><path class="p6pn5jkia"/><path class="zyhaih_og"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:folding-home-dark"} {...others} />);
}

export default Component;
