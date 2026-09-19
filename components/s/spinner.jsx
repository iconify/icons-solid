import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1nk26b6c.css';

const viewBox = {"width":1536,"height":1344};
const content = `<path class="n1nk26b6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:spinner"} {...others} />);
}

export default Component;
