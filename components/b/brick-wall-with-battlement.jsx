import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0j8rpbup.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="m0j8rpbup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:brick-wall-with-battlement"} {...others} />);
}

export default Component;
