import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oq5zwab2c.css';
import '../../css/d/d1uus8zrf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oq5zwab2c"/><path class="d1uus8zrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:bird-alt"} {...others} />);
}

export default Component;
