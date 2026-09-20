import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dk3iqxb1k.css';
import '../../css/q/qbc8wsyir.css';
import '../../css/b/bqgqy_b5k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dk3iqxb1k"/><path class="qbc8wsyir"/><path class="bqgqy_b5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:credit-card-1"} {...others} />);
}

export default Component;
