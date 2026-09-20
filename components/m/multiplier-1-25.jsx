import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ji-p01brs.css';

const viewBox = {"width":40,"height":24};
const content = `<path class="ji-p01brs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:multiplier-1-25"} {...others} />);
}

export default Component;
