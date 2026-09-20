import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e9p7t_bdb.css';
import '../../css/c/cedmezvjn.css';
import '../../css/y/y6jp-zu0j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e9p7t_bdb"/><path class="cedmezvjn"/><path class="y6jp-zu0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:warehouse-storage-2"} {...others} />);
}

export default Component;
