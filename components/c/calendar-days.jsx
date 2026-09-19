import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ns1k3pfla.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ns1k3pfla"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:calendar-days"} {...others} />);
}

export default Component;
