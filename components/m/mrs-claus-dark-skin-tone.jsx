import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8c91mrdm.css';
import '../../css/a/av1mwhtjv.css';
import '../../css/e/e2meqjb5q.css';
import '../../css/u/ultmu3bjv.css';
import '../../css/a/aqby02d8t.css';
import '../../css/h/hp87gqr2b.css';
import '../../css/k/k48tkevun.css';
import '../../css/c/c4yf-6z-r.css';
import '../../css/e/ez68l_bhh.css';
import '../../css/m/m4r42ybok.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="o8c91mrdm"/><path class="av1mwhtjv"/><path class="e2meqjb5q"/><path class="ultmu3bjv"/><path class="aqby02d8t"/><path class="hp87gqr2b"/><path class="k48tkevun"/><path class="c4yf-6z-r"/><path class="ez68l_bhh"/><path class="m4r42ybok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:mrs-claus-dark-skin-tone"} {...others} />);
}

export default Component;
