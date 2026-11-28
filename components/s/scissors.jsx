import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aj0hxv6vg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aj0hxv6vg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:scissors"} {...others} />);
}

export default Component;
