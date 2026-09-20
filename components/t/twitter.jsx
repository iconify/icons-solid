import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/id30-xb5a.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="id30-xb5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:twitter"} {...others} />);
}

export default Component;
