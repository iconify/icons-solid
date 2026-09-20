import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lk5azdbab.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lk5azdbab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:led-strip-variant-off"} {...others} />);
}

export default Component;
