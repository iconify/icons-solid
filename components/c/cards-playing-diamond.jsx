import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ixbt-153a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ixbt-153a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:cards-playing-diamond"} {...others} />);
}

export default Component;
