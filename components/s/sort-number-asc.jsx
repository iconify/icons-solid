import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-y0p4f_i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e-y0p4f_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:sort-number-asc"} {...others} />);
}

export default Component;
