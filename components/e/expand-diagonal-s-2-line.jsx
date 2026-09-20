import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3h3sv7mn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l3h3sv7mn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:expand-diagonal-s-2-line"} {...others} />);
}

export default Component;
