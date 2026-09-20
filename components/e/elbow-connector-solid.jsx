import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvr_ly5gu.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="hvr_ly5gu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:elbow-connector-solid"} {...others} />);
}

export default Component;
