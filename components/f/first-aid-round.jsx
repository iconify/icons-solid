import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adszbn4wz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="adszbn4wz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:first-aid-round"} {...others} />);
}

export default Component;
