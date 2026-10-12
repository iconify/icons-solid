import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d-buwcwgg.css';
import '../../css/n/nt38765ti.css';
import '../../css/n/nmtl4hd5s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d-buwcwgg"/><path class="nt38765ti"/><path class="nmtl4hd5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-music"} {...others} />);
}

export default Component;
