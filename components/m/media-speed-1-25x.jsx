import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dghkc8bsq.css';

const viewBox = {"width":40,"height":24};
const content = `<path class="dghkc8bsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:media-speed-1-25x"} {...others} />);
}

export default Component;
