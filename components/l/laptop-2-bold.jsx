import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2urmqbds.css';
import '../../css/e/ezj2uyggj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s2urmqbds"/><path class="ezj2uyggj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:laptop-2-bold"} {...others} />);
}

export default Component;
