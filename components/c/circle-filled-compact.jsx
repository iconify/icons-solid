import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dfbl99j8q.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="dfbl99j8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:circle-filled-compact"} {...others} />);
}

export default Component;
