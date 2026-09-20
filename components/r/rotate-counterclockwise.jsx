import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lg_wztg3v.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="lg_wztg3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:rotate-counterclockwise"} {...others} />);
}

export default Component;
