import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wu0g0bc4b.css';
import '../../css/g/gn_ul3b0m.css';
import '../../css/f/fm6zmpb9p.css';
import '../../css/a/ajhjdgk1x.css';
import '../../css/p/pquylo05r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wu0g0bc4b"/><path class="gn_ul3b0m"/><path class="fm6zmpb9p"/><path class="ajhjdgk1x"/><path class="pquylo05r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:scatola-magica-light"} {...others} />);
}

export default Component;
