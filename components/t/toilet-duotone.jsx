import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f36-y9b7o.css';
import '../../css/h/hhklj-ekd.css';
import '../../css/j/jq1ocn84k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f36-y9b7o"/><path class="hhklj-ekd"/><path class="jq1ocn84k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:toilet-duotone"} {...others} />);
}

export default Component;
