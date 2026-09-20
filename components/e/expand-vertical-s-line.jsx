import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6se2ob5f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h6se2ob5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:expand-vertical-s-line"} {...others} />);
}

export default Component;
