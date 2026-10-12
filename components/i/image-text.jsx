import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kh5gj2bwp.css';
import '../../css/s/sybny9-7o.css';
import '../../css/a/aamk1-u4m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kh5gj2bwp"/><path class="sybny9-7o"/><path class="aamk1-u4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:image-text"} {...others} />);
}

export default Component;
