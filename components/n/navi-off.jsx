import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/woan3abpq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="woan3abpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:navi-off"} {...others} />);
}

export default Component;
