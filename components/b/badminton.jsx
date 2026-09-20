import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdp9ijb-t.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="fdp9ijb-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:badminton"} {...others} />);
}

export default Component;
