import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvuvqwv4m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kvuvqwv4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:shuffle"} {...others} />);
}

export default Component;
