import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jjd5w6yye.css';
import '../../css/u/uhtv9sb_l.css';
import '../../css/g/gpj9vmplz.css';
import '../../css/l/l0j9bdc-m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jjd5w6yye"/><path class="uhtv9sb_l"/><path class="gpj9vmplz"/><path class="l0j9bdc-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pickup-02"} {...others} />);
}

export default Component;
