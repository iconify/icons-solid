import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bv3_t4bpd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bv3_t4bpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:zodiac-cancer"} {...others} />);
}

export default Component;
