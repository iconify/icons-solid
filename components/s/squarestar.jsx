import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/snv5e5f9c.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="snv5e5f9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:squarestar"} {...others} />);
}

export default Component;
