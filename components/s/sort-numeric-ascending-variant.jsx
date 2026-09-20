import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dp2ge7b-l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dp2ge7b-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:sort-numeric-ascending-variant"} {...others} />);
}

export default Component;
