import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ml2y4kw_y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ml2y4kw_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-bar-stacked-sharp"} {...others} />);
}

export default Component;
