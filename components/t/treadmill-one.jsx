import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti4q6eknm.css';
import '../../css/b/bkycwstta.css';
import '../../css/j/jknat6yla.css';
import '../../css/l/lba8bpl1h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ti4q6eknm"><path class="bkycwstta"/><path class="jknat6yla"/><path class="lba8bpl1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:treadmill-one"} {...others} />);
}

export default Component;
