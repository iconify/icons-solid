import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/c/cpgd0k4ly.css';
import '../../css/s/sdnmbsbxu.css';
import '../../css/m/m3ih_cbjy.css';
import '../../css/r/rdj0mcb-a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="cpgd0k4ly"/><path class="sdnmbsbxu"/><path class="m3ih_cbjy"/><path class="rdj0mcb-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:notification-alarm-2"} {...others} />);
}

export default Component;
