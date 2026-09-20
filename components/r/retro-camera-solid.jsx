import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rpk6ggg_n.css';
import '../../css/n/ndqxj1bdz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rpk6ggg_n"/><path class="ndqxj1bdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:retro-camera-solid"} {...others} />);
}

export default Component;
