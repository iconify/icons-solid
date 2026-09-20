import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/epfl5fyqr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="epfl5fyqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-in-up-dashed-panel-sharp"} {...others} />);
}

export default Component;
