import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vz__jgbed.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vz__jgbed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:circuit-cell-plus"} {...others} />);
}

export default Component;
