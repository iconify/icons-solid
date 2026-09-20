import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lw_7_gbeb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lw_7_gbeb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:terraform"} {...others} />);
}

export default Component;
