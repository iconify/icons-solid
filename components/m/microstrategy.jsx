import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_4zxf1-h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y_4zxf1-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:microstrategy"} {...others} />);
}

export default Component;
