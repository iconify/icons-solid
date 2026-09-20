import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qmljnbb4u.css';
import '../../css/l/l6inxqm2l.css';
import '../../css/c/cbanfebus.css';
import '../../css/i/iubkpvb5h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qmljnbb4u"/><ellipse class="l6inxqm2l"/><path class="cbanfebus"/><path class="iubkpvb5h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:database-duotone"} {...others} />);
}

export default Component;
