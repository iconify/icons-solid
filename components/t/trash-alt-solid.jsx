import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrhf55bxf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nrhf55bxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:trash-alt-solid"} {...others} />);
}

export default Component;
