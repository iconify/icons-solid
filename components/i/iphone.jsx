import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/o/ozbdiq3aa.css';
import '../../css/g/g-zi73ava.css';
import '../../css/g/g698gzb4o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><rect class="ozbdiq3aa"/><path class="g-zi73ava"/><path class="g698gzb4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:iphone"} {...others} />);
}

export default Component;
