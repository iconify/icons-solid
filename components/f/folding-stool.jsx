import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/j/jrmyqgbvi.css';
import '../../css/c/cskxsrm5b.css';
import '../../css/h/h-4yp19zh.css';
import '../../css/l/ldq619nwo.css';
import '../../css/k/kkua4xbns.css';
import '../../css/z/z7z1wdboe.css';
import '../../css/j/jk8up1bsi.css';
import '../../css/y/ytx6jrbmc.css';
import '../../css/l/ljmq-qb3k.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path clip-rule="evenodd" class="jrmyqgbvi"/><path clip-rule="evenodd" class="cskxsrm5b"/><path clip-rule="evenodd" class="h-4yp19zh"/><path clip-rule="evenodd" class="ldq619nwo"/><path class="kkua4xbns"/></g><path clip-rule="evenodd" class="z7z1wdboe"/><path clip-rule="evenodd" class="jk8up1bsi"/><path clip-rule="evenodd" class="ytx6jrbmc"/><path clip-rule="evenodd" class="ljmq-qb3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:folding-stool"} {...others} />);
}

export default Component;
