import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gv9d3zbfn.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="gv9d3zbfn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:slidersoff"} {...others} />);
}

export default Component;
