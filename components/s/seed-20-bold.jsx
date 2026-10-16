import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gs1cxybvq.css';
import '../../css/v/v692yrxpi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gs1cxybvq"/><path class="v692yrxpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:seed-20-bold"} {...others} />);
}

export default Component;
