import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g9kaf_5zk.css';
import '../../css/c/c1og96bbt.css';
import '../../css/f/fvljlfvuv.css';
import '../../css/j/j41oirkjh.css';
import '../../css/d/dbx1300ow.css';
import '../../css/b/byiq38abo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g9kaf_5zk"/><path class="c1og96bbt"/><path class="fvljlfvuv"/><path class="j41oirkjh"/><path class="dbx1300ow"/><path class="byiq38abo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:paginate-filter-7"} {...others} />);
}

export default Component;
