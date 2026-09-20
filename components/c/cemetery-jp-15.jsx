import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q0x2i849g.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="q0x2i849g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:cemetery-jp-15"} {...others} />);
}

export default Component;
