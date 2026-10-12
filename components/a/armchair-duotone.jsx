import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h8ylcx8ej.css';
import '../../css/g/gc9u-abbc.css';
import '../../css/b/bhy-1cb-u.css';
import '../../css/x/x1twb64si.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h8ylcx8ej"/><path class="gc9u-abbc"/><path class="bhy-1cb-u"/><path class="x1twb64si"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:armchair-duotone"} {...others} />);
}

export default Component;
