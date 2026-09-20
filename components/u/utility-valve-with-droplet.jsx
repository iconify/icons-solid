import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6vm9d3lk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="c6vm9d3lk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:utility-valve-with-droplet"} {...others} />);
}

export default Component;
