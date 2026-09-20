import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fj_h99bzx.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="fj_h99bzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:landmark-jp-15"} {...others} />);
}

export default Component;
