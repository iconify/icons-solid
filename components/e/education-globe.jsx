import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/l/l34wx6bfc.css';
import '../../css/t/tvamugbed.css';
import '../../css/g/giai705we.css';
import '../../css/o/o1xsbfb-t.css';
import '../../css/g/gtkh-eb4v.css';
import '../../css/s/sw7dv8bou.css';
import '../../css/g/g19f31bhi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="l34wx6bfc"/><path class="tvamugbed"/><path class="giai705we"/><path class="o1xsbfb-t"/><path class="gtkh-eb4v"/><path class="sw7dv8bou"/><path class="g19f31bhi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:education-globe"} {...others} />);
}

export default Component;
