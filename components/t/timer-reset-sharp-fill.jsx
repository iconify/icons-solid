import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwo2hmvsw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lwo2hmvsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:timer-reset-sharp-fill"} {...others} />);
}

export default Component;
