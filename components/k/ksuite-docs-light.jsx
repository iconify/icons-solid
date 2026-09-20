import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lu6nytwut.css';
import '../../css/d/dt8zsopdi.css';
import '../../css/p/pg98fbbdj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lu6nytwut"/><path class="dt8zsopdi"/><path class="pg98fbbdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-docs-light"} {...others} />);
}

export default Component;
