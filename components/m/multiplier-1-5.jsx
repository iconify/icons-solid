import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uywc1tb1m.css';

const viewBox = {"width":40,"height":24};
const content = `<path class="uywc1tb1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:multiplier-1-5"} {...others} />);
}

export default Component;
