import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/opf73zw6a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="opf73zw6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:alarm-clock-multiple"} {...others} />);
}

export default Component;
