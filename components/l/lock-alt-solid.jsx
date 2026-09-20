import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5_1xv7xi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f5_1xv7xi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:lock-alt-solid"} {...others} />);
}

export default Component;
