import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u87yr5b4c.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="u87yr5b4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:archive"} {...others} />);
}

export default Component;
