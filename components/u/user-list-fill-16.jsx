import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yodzen-to.css';
import '../../css/x/x9bub5b4h.css';
import '../../css/z/zbegq1b6y.css';
import '../../css/q/qzghk1bvp.css';
import '../../css/w/wdqzwdcxo.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><circle class="yodzen-to"/><path class="x9bub5b4h"/><rect class="zbegq1b6y"/><rect class="qzghk1bvp"/><rect class="wdqzwdcxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:user-list-fill-16"} {...others} />);
}

export default Component;
