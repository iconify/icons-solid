import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gq3z2ybyr.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="gq3z2ybyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:folders"} {...others} />);
}

export default Component;
