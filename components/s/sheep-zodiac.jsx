import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/u/uwyopsb1v.css';
import '../../css/g/go4cdrb9b.css';
import '../../css/x/x07div41m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="uwyopsb1v"/><path class="go4cdrb9b"/><path class="x07div41m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:sheep-zodiac"} {...others} />);
}

export default Component;
