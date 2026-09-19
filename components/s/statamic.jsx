import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oypxq_y1j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="oypxq_y1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:statamic"} {...others} />);
}

export default Component;
