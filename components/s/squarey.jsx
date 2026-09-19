import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uy6mme2wu.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="uy6mme2wu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:squarey"} {...others} />);
}

export default Component;
