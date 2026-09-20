import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umk3i6b0d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="umk3i6b0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:television-guide"} {...others} />);
}

export default Component;
