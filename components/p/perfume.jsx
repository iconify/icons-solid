import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o8gsc8b7m.css';
import '../../css/k/kh73hfm6v.css';
import '../../css/b/btovx6blc.css';
import '../../css/b/bqj0ijarp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="o8gsc8b7m"/><rect class="kh73hfm6v"/><path class="btovx6blc"/><path class="bqj0ijarp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:perfume"} {...others} />);
}

export default Component;
