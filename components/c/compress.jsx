import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u8dght63r.css';

const viewBox = {"width":16,"height":15};
const content = `<path class="u8dght63r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:compress"} {...others} />);
}

export default Component;
