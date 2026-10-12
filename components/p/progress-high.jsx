import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/of79stbzw.css';
import '../../css/m/mpf1g8bav.css';
import '../../css/n/nyiu9zb1e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="of79stbzw"/><circle class="mpf1g8bav"/><path clip-rule="evenodd" class="nyiu9zb1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:progress-high"} {...others} />);
}

export default Component;
