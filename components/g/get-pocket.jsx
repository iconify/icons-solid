import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tz_6x620o.css';

const viewBox = {"width":1728,"height":1536};
const content = `<path class="tz_6x620o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:get-pocket"} {...others} />);
}

export default Component;
