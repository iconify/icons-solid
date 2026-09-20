import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/una5hpbth.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="una5hpbth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zondicons:pen-tool"} {...others} />);
}

export default Component;
