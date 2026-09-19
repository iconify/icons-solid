import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cn7oi9-ou.css';
import '../../css/c/cjcuh_i5u.css';
import '../../css/f/fsshfvbco.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cn7oi9-ou"/><circle transform="rotate(-180 11 11)" class="cjcuh_i5u"/><path class="fsshfvbco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:pen-thin"} {...others} />);
}

export default Component;
