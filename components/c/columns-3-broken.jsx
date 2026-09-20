import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bfsv7cc4c.css';
import '../../css/m/ml0cb1b5h.css';
import '../../css/h/h111i6rqf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bfsv7cc4c"/><path class="ml0cb1b5h"/><path class="h111i6rqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:columns-3-broken"} {...others} />);
}

export default Component;
