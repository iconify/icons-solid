import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uu7gz6_gr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uu7gz6_gr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dagster-dark"} {...others} />);
}

export default Component;
