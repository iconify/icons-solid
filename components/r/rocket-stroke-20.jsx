import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zihtko4od.css';
import '../../css/o/oalqs3ghm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zihtko4od"/><path class="oalqs3ghm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:rocket-stroke-20"} {...others} />);
}

export default Component;
