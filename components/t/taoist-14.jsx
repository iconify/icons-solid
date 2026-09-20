import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwn7_2srg.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="gwn7_2srg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:taoist-14"} {...others} />);
}

export default Component;
