import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tjv4dy7qr.css';
import '../../css/a/adqsiqg3s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tjv4dy7qr"/><path class="adqsiqg3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:caliper-20-bold"} {...others} />);
}

export default Component;
