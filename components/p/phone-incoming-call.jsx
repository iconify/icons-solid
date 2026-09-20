import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-t_xccjl.css';
import '../../css/o/o2jt7mbjg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="y-t_xccjl"/><path class="o2jt7mbjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:phone-incoming-call"} {...others} />);
}

export default Component;
