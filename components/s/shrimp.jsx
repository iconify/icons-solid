import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ww5e5e7-f.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="ww5e5e7-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:shrimp"} {...others} />);
}

export default Component;
