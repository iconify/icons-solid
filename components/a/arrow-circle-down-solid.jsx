import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i9cm65b6l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i9cm65b6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:arrow-circle-down-solid"} {...others} />);
}

export default Component;
