import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itnu9cc9i.css';
import '../../css/j/j49a82dzi.css';
import '../../css/o/o8g0obc8w.css';
import '../../css/u/upw9b3bds.css';
import '../../css/u/ulld3xbqb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="itnu9cc9i"/><path class="j49a82dzi"/><path class="o8g0obc8w"/><path class="upw9b3bds"/><path class="ulld3xbqb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:office-file-xls"} {...others} />);
}

export default Component;
