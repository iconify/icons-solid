import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ee1eie8lx.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="ee1eie8lx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:dribble-solid"} {...others} />);
}

export default Component;
