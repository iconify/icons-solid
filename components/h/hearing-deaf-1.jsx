import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/y/yj2u08bni.css';
import '../../css/g/gphoreb5g.css';
import '../../css/u/ux7jvgwqz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="yj2u08bni"/><path class="gphoreb5g"/><path class="ux7jvgwqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:hearing-deaf-1"} {...others} />);
}

export default Component;
