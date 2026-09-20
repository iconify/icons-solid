import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/whfl3kb-r.css';
import '../../css/l/laz58e6cn.css';
import '../../css/j/jmtoiebca.css';
import '../../css/s/so4w25-jt.css';

const viewBox = {"width":499.3,"height":72};
const content = `<path clip-rule="evenodd" class="whfl3kb-r"/><path class="laz58e6cn"/><path clip-rule="evenodd" class="jmtoiebca"/><path clip-rule="evenodd" class="so4w25-jt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:austrian-airlines"} {...others} />);
}

export default Component;
