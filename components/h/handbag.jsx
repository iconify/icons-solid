import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a-xumvv6t.css';
import '../../css/n/ni4atqn7v.css';
import '../../css/r/rhafed4lw.css';
import '../../css/o/oopfy791f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="a-xumvv6t"/><path class="ni4atqn7v"/><path class="rhafed4lw"/><path class="oopfy791f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:handbag"} {...others} />);
}

export default Component;
