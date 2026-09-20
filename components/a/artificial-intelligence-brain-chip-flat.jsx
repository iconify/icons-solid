import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nyhj-db5n.css';
import '../../css/b/b0e1u5brg.css';
import '../../css/l/lh7dcpbgk.css';
import '../../css/i/iyg9b_b9r.css';
import '../../css/x/xwp4b9w7u.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="nyhj-db5n"/><path clip-rule="evenodd" class="b0e1u5brg"/><path class="lh7dcpbgk"/><path clip-rule="evenodd" class="iyg9b_b9r"/><path class="xwp4b9w7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:artificial-intelligence-brain-chip-flat"} {...others} />);
}

export default Component;
