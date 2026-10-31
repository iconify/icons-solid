import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/muf-8jbyw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="muf-8jbyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-down-small-duocolor-round"} {...others} />);
}

export default Component;
