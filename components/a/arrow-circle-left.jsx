import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p89tr8rsx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="p89tr8rsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:arrow-circle-left"} {...others} />);
}

export default Component;
