import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d1uus8zrf.css';
import '../../css/z/zzmml7btc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d1uus8zrf"/><path class="zzmml7btc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:bird"} {...others} />);
}

export default Component;
