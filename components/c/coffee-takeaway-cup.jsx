import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1l9ex7qa.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="i1l9ex7qa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:coffee-takeaway-cup"} {...others} />);
}

export default Component;
