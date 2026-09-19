import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etwhu2bjn.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="etwhu2bjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:video"} {...others} />);
}

export default Component;
