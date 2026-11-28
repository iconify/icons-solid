import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ir8b8ublh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ir8b8ublh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:bell-ring"} {...others} />);
}

export default Component;
