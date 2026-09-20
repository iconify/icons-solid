import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/btvzwg_0d.css';
import '../../css/f/f7-f7bvjr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="btvzwg_0d"/><path class="f7-f7bvjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:star-crescent"} {...others} />);
}

export default Component;
