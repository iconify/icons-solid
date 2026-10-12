import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tt4h9mb-m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tt4h9mb-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:list-sparkle-stroke-20"} {...others} />);
}

export default Component;
