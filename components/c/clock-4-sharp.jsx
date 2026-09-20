import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/usteh0sxt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="usteh0sxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:clock-4-sharp"} {...others} />);
}

export default Component;
