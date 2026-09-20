import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jf8klcbox.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jf8klcbox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:thumb-up-off"} {...others} />);
}

export default Component;
