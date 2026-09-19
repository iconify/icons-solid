import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnmc9_k6s.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="rnmc9_k6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:squareeight"} {...others} />);
}

export default Component;
