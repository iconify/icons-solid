import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tf6sk9b_n.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="tf6sk9b_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-home-1-home-house-map-roof"} {...others} />);
}

export default Component;
