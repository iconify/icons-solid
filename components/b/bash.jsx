import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8l8khb2z.css';
import '../../css/u/uuh2v9f7r.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="l8l8khb2z"/><path class="uuh2v9f7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:bash"} {...others} />);
}

export default Component;
