import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qem3v3brf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qem3v3brf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-down-wide-narrow-sharp-fill"} {...others} />);
}

export default Component;
