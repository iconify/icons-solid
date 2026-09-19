import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/otytcjcgs.css';
import '../../css/i/io_ndq9wr.css';
import '../../css/g/gu-bvxb1q.css';
import '../../css/a/a9q4ccc7q.css';
import '../../css/x/xzaguo_yo.css';
import '../../css/f/f8v764b6x.css';
import '../../css/n/njzax0-it.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="otytcjcgs"/><path class="io_ndq9wr"/><path class="gu-bvxb1q"/><path class="a9q4ccc7q"/><path class="xzaguo_yo"/><path class="f8v764b6x"/><path class="njzax0-it"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:sandwich"} {...others} />);
}

export default Component;
