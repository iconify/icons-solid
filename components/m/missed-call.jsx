import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/v/vjv8l4xni.css';
import '../../css/x/xvxr2ccse.css';
import '../../css/f/fh2f_ro8s.css';
import '../../css/j/jmo3_bb4o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="vjv8l4xni"/><path class="xvxr2ccse"/><path class="fh2f_ro8s"/><path class="jmo3_bb4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:missed-call"} {...others} />);
}

export default Component;
