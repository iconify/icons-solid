import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tgf1fixwx.css';
import '../../css/d/d26v317vg.css';
import '../../css/i/iyugarbgj.css';
import '../../css/k/ku63a9bkq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="tgf1fixwx"/><g class="d26v317vg"><path class="iyugarbgj"/><path class="ku63a9bkq"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:dtr"} {...others} />);
}

export default Component;
