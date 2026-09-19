import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4wxqtb9k.css';
import '../../css/i/i41e6pm1x.css';
import '../../css/l/l1tdjlb-d.css';
import '../../css/b/b12gxvr_k.css';
import '../../css/u/uqsohbb5z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l4wxqtb9k"/><circle class="i41e6pm1x"/><circle class="l1tdjlb-d"/><circle class="b12gxvr_k"/><circle class="uqsohbb5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-palette"} {...others} />);
}

export default Component;
