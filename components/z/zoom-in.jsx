import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ugh8mab3o.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="ugh8mab3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:zoom-in"} {...others} />);
}

export default Component;
