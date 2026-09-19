import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n6rq6xrib.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n6rq6xrib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:firewall-classic"} {...others} />);
}

export default Component;
