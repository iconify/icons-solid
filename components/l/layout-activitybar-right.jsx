import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rpik4gbiu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rpik4gbiu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:layout-activitybar-right"} {...others} />);
}

export default Component;
