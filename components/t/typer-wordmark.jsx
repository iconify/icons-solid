import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yx_6q807q.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="yx_6q807q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:typer-wordmark"} {...others} />);
}

export default Component;
