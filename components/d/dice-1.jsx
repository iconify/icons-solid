import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtqzxr8te.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jtqzxr8te"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:dice-1"} {...others} />);
}

export default Component;
