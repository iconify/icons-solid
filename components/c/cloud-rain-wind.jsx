import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sg12si0rh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sg12si0rh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:cloud-rain-wind"} {...others} />);
}

export default Component;
