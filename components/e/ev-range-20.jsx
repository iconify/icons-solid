import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjnplr66g.css';
import '../../css/g/gziv7kbno.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jjnplr66g"/><path class="gziv7kbno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-range-20"} {...others} />);
}

export default Component;
