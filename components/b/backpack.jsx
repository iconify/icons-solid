import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jf0f0uh5k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jf0f0uh5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:backpack"} {...others} />);
}

export default Component;
