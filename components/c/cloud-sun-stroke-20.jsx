import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/spgqeiahh.css';
import '../../css/x/xov8m50ru.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="spgqeiahh"/><path class="xov8m50ru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:cloud-sun-stroke-20"} {...others} />);
}

export default Component;
