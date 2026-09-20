import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmhh2qtxf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fmhh2qtxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:credit-card-solid"} {...others} />);
}

export default Component;
