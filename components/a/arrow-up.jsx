import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ag1m98bhs.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="ag1m98bhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:arrow-up"} {...others} />);
}

export default Component;
