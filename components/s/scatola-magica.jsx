import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aq45rlu7v.css';
import '../../css/a/a_5lpib9v.css';
import '../../css/o/ocwf-ob2r.css';
import '../../css/j/j-nugac0o.css';
import '../../css/g/gbguvikkd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="aq45rlu7v"/><path class="a_5lpib9v"/><path class="ocwf-ob2r"/><path class="j-nugac0o"/><path class="gbguvikkd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:scatola-magica"} {...others} />);
}

export default Component;
