import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/l/loylslbpd.css';
import '../../css/r/rxpi_acqf.css';
import '../../css/d/d13ia6tuk.css';
import '../../css/b/bso12sb0c.css';
import '../../css/d/dgdw9p98u.css';
import '../../css/n/ndtx13brx.css';
import '../../css/t/t5ms8wb7c.css';
import '../../css/b/bx-6-ob2o.css';
import '../../css/y/yac5tkxpx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><rect class="loylslbpd"/><path class="rxpi_acqf"/><path class="d13ia6tuk"/><path class="bso12sb0c"/><path class="dgdw9p98u"/><path class="ndtx13brx"/><path class="t5ms8wb7c"/><path class="bx-6-ob2o"/><path class="yac5tkxpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:chip"} {...others} />);
}

export default Component;
