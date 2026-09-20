import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/m/mkjld6j7s.css';
import '../../css/a/a32l4rb1c.css';
import '../../css/o/ow118d04o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="mkjld6j7s"/><path class="a32l4rb1c"/><path class="ow118d04o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:megaphone-2"} {...others} />);
}

export default Component;
