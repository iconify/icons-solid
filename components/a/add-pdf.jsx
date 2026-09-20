import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/x/xuun7cc7c.css';
import '../../css/s/s1om_jb6x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="xuun7cc7c"/><path class="s1om_jb6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:add-pdf"} {...others} />);
}

export default Component;
