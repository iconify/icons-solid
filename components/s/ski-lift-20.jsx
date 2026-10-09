import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ox-4if7um.css';
import '../../css/l/ld9a8ebwv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ox-4if7um"/><path class="ld9a8ebwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ski-lift-20"} {...others} />);
}

export default Component;
