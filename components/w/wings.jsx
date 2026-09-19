import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/budxb8tgx.css';
import '../../css/d/d26v317vg.css';
import '../../css/v/v1osumnlh.css';
import '../../css/m/m04k14b0z.css';
import '../../css/t/t-qe7ekev.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="budxb8tgx"/><g class="d26v317vg"><path class="v1osumnlh"/><path class="m04k14b0z"/><path class="t-qe7ekev"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:wings"} {...others} />);
}

export default Component;
