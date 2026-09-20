import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjnn37b9t.css';
import '../../css/q/q2qjyxbjj.css';
import '../../css/n/nmxyf3bqj.css';
import '../../css/b/bz7kufbhr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yjnn37b9t"/><path class="q2qjyxbjj"/><path class="nmxyf3bqj"/><path class="bz7kufbhr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:construction-blueprint"} {...others} />);
}

export default Component;
