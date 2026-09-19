import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eaqtflmuv.css';
import '../../css/n/n8zqd8y2d.css';
import '../../css/g/gd0zbenas.css';
import '../../css/o/o95pry9_x.css';
import '../../css/p/pcfarkbfz.css';
import '../../css/n/ns2iggbgg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eaqtflmuv"/><path class="n8zqd8y2d"/><path class="gd0zbenas"/><path class="o95pry9_x"/><path class="pcfarkbfz"/><path class="ns2iggbgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:christmastree"} {...others} />);
}

export default Component;
