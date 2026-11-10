import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jli7lacif.css';
import '../../css/n/nbf9p2bla.css';
import '../../css/k/kwu0p7b0t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jli7lacif"/><path class="nbf9p2bla"/><path class="kwu0p7b0t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:piano-keys"} {...others} />);
}

export default Component;
