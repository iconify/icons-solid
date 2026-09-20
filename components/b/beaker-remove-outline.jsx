import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sckf1ebqi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sckf1ebqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:beaker-remove-outline"} {...others} />);
}

export default Component;
