import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvy7w-nir.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hvy7w-nir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:monkey-tie"} {...others} />);
}

export default Component;
