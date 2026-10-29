import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tz1y301ju.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tz1y301ju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:japanese-yen-solid"} {...others} />);
}

export default Component;
