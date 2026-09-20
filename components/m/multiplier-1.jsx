import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/riei8-yoo.css';

const viewBox = {"width":40,"height":24};
const content = `<path class="riei8-yoo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:multiplier-1"} {...others} />);
}

export default Component;
