import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbncc194d.css';
import '../../css/r/rnfj33zxy.css';
import '../../css/x/xpiiaw94l.css';

const viewBox = {"width":15,"height":15};
const content = `<g clip-rule="evenodd" class="xbncc194d"><path class="rnfj33zxy"/><path class="xpiiaw94l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:pin-outline"} {...others} />);
}

export default Component;
