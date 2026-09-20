import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/k/k7v6wxxvt.css';
import '../../css/m/m14ix2tjj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="k7v6wxxvt"/><path class="m14ix2tjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:zip-file"} {...others} />);
}

export default Component;
