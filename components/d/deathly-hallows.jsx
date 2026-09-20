import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o_2s7obvg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o_2s7obvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:deathly-hallows"} {...others} />);
}

export default Component;
