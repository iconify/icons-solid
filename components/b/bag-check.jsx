import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rc7k2r7yx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rc7k2r7yx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:bag-check"} {...others} />);
}

export default Component;
