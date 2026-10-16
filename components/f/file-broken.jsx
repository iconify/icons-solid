import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ch5s3sbeh.css';
import '../../css/z/zu7_3db4t.css';
import '../../css/w/w-fyccall.css';
import '../../css/i/ifix6xbbk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ch5s3sbeh"/><path class="zu7_3db4t"/><path class="w-fyccall"/><path class="ifix6xbbk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-broken"} {...others} />);
}

export default Component;
