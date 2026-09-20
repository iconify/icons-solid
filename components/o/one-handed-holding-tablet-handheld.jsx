import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/g/gfy0wdb_f.css';
import '../../css/f/f62px9bok.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="gfy0wdb_f"/><path class="f62px9bok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:one-handed-holding-tablet-handheld"} {...others} />);
}

export default Component;
