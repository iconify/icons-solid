import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/b/bg8astbrt.css';
import '../../css/b/bwy4czm5u.css';
import '../../css/g/g3jivrnhg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="bg8astbrt"/><path class="bwy4czm5u"/><path class="g3jivrnhg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:garlic"} {...others} />);
}

export default Component;
