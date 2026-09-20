import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ili7pu_wf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ili7pu_wf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:wp-rocket"} {...others} />);
}

export default Component;
