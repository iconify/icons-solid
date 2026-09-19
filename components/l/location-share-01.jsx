import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/ypp_29btr.css';
import '../../css/g/gkxyxtbmf.css';
import '../../css/i/im7es_bhr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ypp_29btr"/><path class="gkxyxtbmf"/><path class="im7es_bhr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:location-share-01"} {...others} />);
}

export default Component;
