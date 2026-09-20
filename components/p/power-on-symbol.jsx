import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hq6rqbp0n.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="hq6rqbp0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:power-on-symbol"} {...others} />);
}

export default Component;
