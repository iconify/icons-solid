import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/svjez5bnv.css';
import '../../css/t/todid_jkm.css';
import '../../css/j/j9j20gb6q.css';
import '../../css/x/xw6xfpouc.css';
import '../../css/a/a73yutbfd.css';
import '../../css/q/qngn3tbqy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="svjez5bnv"/><path class="todid_jkm"/><path class="j9j20gb6q"/><circle class="xw6xfpouc"/><circle class="a73yutbfd"/><circle class="qngn3tbqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:blockchain"} {...others} />);
}

export default Component;
