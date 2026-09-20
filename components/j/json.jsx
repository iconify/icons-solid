import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/loo_9-4ps.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="loo_9-4ps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:json"} {...others} />);
}

export default Component;
