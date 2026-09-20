import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc-fz3p4r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bc-fz3p4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:prescription"} {...others} />);
}

export default Component;
