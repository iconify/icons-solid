import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgjnt5bfz.css';
import '../../css/y/y08ndqbqd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rgjnt5bfz"/><path class="y08ndqbqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:facebook"} {...others} />);
}

export default Component;
