import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x372b7bwx.css';
import '../../css/y/yc5qdthlh.css';
import '../../css/a/aqro9ob8j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x372b7bwx"/><path class="yc5qdthlh"/><path class="aqro9ob8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:data-base"} {...others} />);
}

export default Component;
