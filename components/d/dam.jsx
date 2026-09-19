import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxa8gzb9h.css';
import '../../css/z/z6doifb7c.css';
import '../../css/s/sqb-0hb_q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qxa8gzb9h"/><path class="z6doifb7c"/><path class="sqb-0hb_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:dam"} {...others} />);
}

export default Component;
