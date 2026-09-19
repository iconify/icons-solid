import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvch9ib1h.css';

const viewBox = {"width":20,"height":24};
const content = `<path class="yvch9ib1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:unlocked"} {...others} />);
}

export default Component;
