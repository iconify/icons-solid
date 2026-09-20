import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/osc6h6bpq.css';
import '../../css/c/cdbh5qb5t.css';
import '../../css/c/chsx_4bll.css';
import '../../css/i/ifqate1da.css';
import '../../css/r/ruy6gmbrs.css';
import '../../css/t/tgbrjhbyh.css';
import '../../css/a/an86oacyq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="osc6h6bpq"/><path class="cdbh5qb5t"/><path class="chsx_4bll"/><path class="ifqate1da"/><path class="ruy6gmbrs"/><path class="tgbrjhbyh"/><path class="an86oacyq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:peacock"} {...others} />);
}

export default Component;
