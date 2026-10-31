import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tkv3n0bjw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tkv3n0bjw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:component-instance-round"} {...others} />);
}

export default Component;
