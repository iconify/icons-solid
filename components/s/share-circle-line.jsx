import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mv81c1eak.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mv81c1eak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:share-circle-line"} {...others} />);
}

export default Component;
