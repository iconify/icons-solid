import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oq9rz809x.css';
import '../../css/d/dfwty8a8u.css';
import '../../css/u/ucklnp5sf.css';
import '../../css/i/iw1es0sil.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oq9rz809x"/><path class="dfwty8a8u"/><path class="ucklnp5sf"/><path class="iw1es0sil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-music"} {...others} />);
}

export default Component;
