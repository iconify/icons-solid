import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dvukd7s7w.css';
import '../../css/c/cvicncc2u.css';
import '../../css/k/k-9ggr4ye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dvukd7s7w"/><path class="cvicncc2u"/><path class="k-9ggr4ye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ball-football"} {...others} />);
}

export default Component;
