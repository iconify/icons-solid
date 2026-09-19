import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1b7dlb_x.css';
import '../../css/p/p586cjbdt.css';
import '../../css/o/owhr5ut9l.css';
import '../../css/j/jhszfhpco.css';
import '../../css/p/pl5pmnbeg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w1b7dlb_x"/><path class="p586cjbdt"/><path class="owhr5ut9l"/><path class="jhszfhpco"/><path class="pl5pmnbeg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:datashare"} {...others} />);
}

export default Component;
