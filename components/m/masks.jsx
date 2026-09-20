import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rahfs-2vi.css';
import '../../css/l/l9ho-jblf.css';
import '../../css/r/rwwo4yncv.css';
import '../../css/o/oojpntb5k.css';
import '../../css/o/octwf6rrp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rahfs-2vi"/><path class="l9ho-jblf"/><path class="rwwo4yncv"/><path class="oojpntb5k"/><path class="octwf6rrp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:masks"} {...others} />);
}

export default Component;
