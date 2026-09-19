import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-7g6-bii.css';
import '../../css/a/a7xkecbkr.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="b-7g6-bii"/><path class="a7xkecbkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:tag"} {...others} />);
}

export default Component;
