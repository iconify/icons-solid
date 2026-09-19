import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dyp2mwbic.css';
import '../../css/i/iw0zruopo.css';
import '../../css/g/gnkgrpboh.css';
import '../../css/h/h2z5fgbqd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dyp2mwbic"/><g class="iw0zruopo"><path class="gnkgrpboh"/><path class="h2z5fgbqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:data-recovery"} {...others} />);
}

export default Component;
