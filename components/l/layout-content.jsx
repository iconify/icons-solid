import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/md01h9twa.css';
import '../../css/w/w8yxh3bbx.css';
import '../../css/o/os65b1gwc.css';
import '../../css/p/p-isiybaz.css';
import '../../css/u/u4msfdyon.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="md01h9twa"/><path class="w8yxh3bbx"/><path class="os65b1gwc"/><path class="p-isiybaz"/><path class="u4msfdyon"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:layout-content"} {...others} />);
}

export default Component;
