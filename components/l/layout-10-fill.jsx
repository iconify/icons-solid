import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vyl6qzb_o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vyl6qzb_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:layout-10-fill"} {...others} />);
}

export default Component;
