import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to1it8btp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="to1it8btp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:axis-z-rotate-counterclockwise"} {...others} />);
}

export default Component;
