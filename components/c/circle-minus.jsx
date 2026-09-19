import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ovu-g_vkt.css';
import '../../css/u/uivx-nb_o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ovu-g_vkt"/><path class="uivx-nb_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:circle-minus"} {...others} />);
}

export default Component;
