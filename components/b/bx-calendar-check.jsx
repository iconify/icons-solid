import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dfc4wub2q.css';
import '../../css/r/r2ojm4wqq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dfc4wub2q"/><path class="r2ojm4wqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-calendar-check"} {...others} />);
}

export default Component;
