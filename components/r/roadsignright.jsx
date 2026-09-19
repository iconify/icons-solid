import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vn1pmzfrr.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="vn1pmzfrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:roadsignright"} {...others} />);
}

export default Component;
