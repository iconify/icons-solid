import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c3buayb6b.css';
import '../../css/i/im7es_bhr.css';
import '../../css/l/lbpdwbb-x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="c3buayb6b"/><path class="im7es_bhr"/><path class="lbpdwbb-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:location-share-02"} {...others} />);
}

export default Component;
