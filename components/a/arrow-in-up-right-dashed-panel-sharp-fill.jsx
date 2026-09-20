import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gq_3ltbpr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gq_3ltbpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-in-up-right-dashed-panel-sharp-fill"} {...others} />);
}

export default Component;
