import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ilq4mj0ny.css';
import '../../css/a/agps2ol2u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ilq4mj0ny"/><path class="agps2ol2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:text-to-speech"} {...others} />);
}

export default Component;
