import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zgfs5qbos.css';
import '../../css/s/s69_stbql.css';
import '../../css/c/cezfkdb-r.css';
import '../../css/m/mmbxylbjq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zgfs5qbos"/><path class="s69_stbql"/><path class="cezfkdb-r"/><path class="mmbxylbjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:time-clock-circle"} {...others} />);
}

export default Component;
