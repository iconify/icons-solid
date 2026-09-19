import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hcc7plb6l.css';
import '../../css/r/rhcdyqe0l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hcc7plb6l"/><path class="rhcdyqe0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-nutrition"} {...others} />);
}

export default Component;
