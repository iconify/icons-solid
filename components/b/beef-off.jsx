import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qcypmmoky.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qcypmmoky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:beef-off"} {...others} />);
}

export default Component;
