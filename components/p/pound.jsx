import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dubu0bb3r.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="dubu0bb3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:pound"} {...others} />);
}

export default Component;
