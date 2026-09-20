import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vscd-0bdi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vscd-0bdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-down-narrow-wide-sharp-fill"} {...others} />);
}

export default Component;
