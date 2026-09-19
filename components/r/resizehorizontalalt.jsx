import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgd9a0b_p.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="rgd9a0b_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:resizehorizontalalt"} {...others} />);
}

export default Component;
