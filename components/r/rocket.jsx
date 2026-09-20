import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3_b9ib7p.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="i3_b9ib7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:rocket"} {...others} />);
}

export default Component;
