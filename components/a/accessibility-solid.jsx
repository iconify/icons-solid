import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i4qw9_bps.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i4qw9_bps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:accessibility-solid"} {...others} />);
}

export default Component;
