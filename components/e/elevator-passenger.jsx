import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iq_3l-byg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iq_3l-byg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:elevator-passenger"} {...others} />);
}

export default Component;
