import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgc28lbvr.css';
import '../../css/d/d2crkbcfy.css';
import '../../css/n/npi2psbkk.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="pgc28lbvr"/><path clip-rule="evenodd" class="d2crkbcfy"/><path clip-rule="evenodd" class="npi2psbkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:hard-drive-1-flat"} {...others} />);
}

export default Component;
