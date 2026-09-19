import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9ma__bqh.css';
import '../../css/t/td4gnzb6z.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="f9ma__bqh"/><path class="td4gnzb6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:forgejo"} {...others} />);
}

export default Component;
