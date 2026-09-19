import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqgw987ga.css';

const viewBox = {"width":1536,"height":1792};
const content = `<path class="kqgw987ga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:hourglass-end"} {...others} />);
}

export default Component;
