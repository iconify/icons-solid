import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/h/hfq8jpu7i.css';
import '../../css/a/ae0h5kb0o.css';
import '../../css/y/y-5lwxgxu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><circle class="hfq8jpu7i"/><path class="ae0h5kb0o"/><path class="y-5lwxgxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:expressionless-face-thin"} {...others} />);
}

export default Component;
