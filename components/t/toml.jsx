import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dhybq6bxs.css';
import '../../css/n/n5ithpbrj.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="dhybq6bxs"/><path class="n5ithpbrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:toml"} {...others} />);
}

export default Component;
