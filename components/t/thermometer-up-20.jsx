import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6zve7bwi.css';
import '../../css/l/lrf20th3l.css';
import '../../css/q/qekov_6lg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x6zve7bwi"/><path class="lrf20th3l"/><path class="qekov_6lg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermometer-up-20"} {...others} />);
}

export default Component;
