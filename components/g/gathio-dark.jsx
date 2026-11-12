import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pojcwywxn.css';
import '../../css/h/hua_nkb7m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pojcwywxn"/><path class="hua_nkb7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gathio-dark"} {...others} />);
}

export default Component;
