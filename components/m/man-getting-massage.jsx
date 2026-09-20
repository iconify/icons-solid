import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/esnfk8b_u.css';
import '../../css/b/b2h-u3y6n.css';
import '../../css/x/x4u8pbwjc.css';
import '../../css/a/ab9fz2b_x.css';
import '../../css/h/hi_imlb4q.css';
import '../../css/c/c6hwp1kya.css';
import '../../css/s/shk1zib_q.css';
import '../../css/j/jdtnojbie.css';
import '../../css/k/k569auulu.css';
import '../../css/p/p6jpuwn-x.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGkwMQ4bQS" class="esnfk8b_u"/></defs><path class="b2h-u3y6n"/><g class="x4u8pbwjc"><path class="ab9fz2b_x"/><path class="hi_imlb4q"/></g><path class="c6hwp1kya"/><use href="#SVGkwMQ4bQS"/><path class="shk1zib_q"/><use href="#SVGkwMQ4bQS"/><path class="jdtnojbie"/><path class="k569auulu"/><path class="p6jpuwn-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-getting-massage"} {...others} />);
}

export default Component;
