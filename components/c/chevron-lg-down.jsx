import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oe_1fl_8n.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="oe_1fl_8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:chevron-lg-down"} {...others} />);
}

export default Component;
