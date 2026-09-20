import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vef-s7bpa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vef-s7bpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:grid-4x4"} {...others} />);
}

export default Component;
