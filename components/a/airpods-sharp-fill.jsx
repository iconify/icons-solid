import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpe5qmjmf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wpe5qmjmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:airpods-sharp-fill"} {...others} />);
}

export default Component;
