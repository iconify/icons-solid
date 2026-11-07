import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/do-e7qb8u.css';
import '../../css/h/h_t6g3fbz.css';
import '../../css/c/cphejizkr.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/f/fqqm0cbjc.css';
import '../../css/x/xcam00sly.css';
import '../../css/i/i2wsufbeu.css';
import '../../css/h/h_qa4lfmi.css';
import '../../css/c/crjr8y_ds.css';
import '../../css/l/lx5h_8o5e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="do-e7qb8u"/><path class="h_t6g3fbz"/><path class="cphejizkr"/><g class="xtpeb-edw"><path class="fqqm0cbjc"/><path class="xcam00sly"/><path class="i2wsufbeu"/><path class="h_qa4lfmi"/><path class="crjr8y_ds"/><path class="lx5h_8o5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-4-bold-duotone"} {...others} />);
}

export default Component;
