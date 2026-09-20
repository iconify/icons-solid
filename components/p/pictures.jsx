import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rxq8y6y1w.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="rxq8y6y1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:pictures"} {...others} />);
}

export default Component;
