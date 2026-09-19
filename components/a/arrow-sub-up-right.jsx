import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z43vcdw3q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z43vcdw3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:arrow-sub-up-right"} {...others} />);
}

export default Component;
