import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbh1lyi-t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jbh1lyi-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-spline-solid"} {...others} />);
}

export default Component;
