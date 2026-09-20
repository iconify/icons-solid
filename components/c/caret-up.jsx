import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfi2grt-v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rfi2grt-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:caret-up"} {...others} />);
}

export default Component;
