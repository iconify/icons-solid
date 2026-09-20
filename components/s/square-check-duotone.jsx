import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sdrmlmx_y.css';
import '../../css/y/ytv8j6l6t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sdrmlmx_y"/><path class="ytv8j6l6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:square-check-duotone"} {...others} />);
}

export default Component;
