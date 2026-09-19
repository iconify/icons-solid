import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/grv2xbbrt.css';

const viewBox = {"width":32,"height":24};
const content = `<path class="grv2xbbrt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:forward"} {...others} />);
}

export default Component;
