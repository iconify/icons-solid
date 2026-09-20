import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g2dqk2sur.css';
import '../../css/t/t3kyidv8t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g2dqk2sur"/><path class="t3kyidv8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cr-nmaster"} {...others} />);
}

export default Component;
