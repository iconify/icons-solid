import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/soi53cr5t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="soi53cr5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:chevron-down-circle-outline"} {...others} />);
}

export default Component;
