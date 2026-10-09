import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uyyqc0_4u.css';
import '../../css/l/lt5eqobgu.css';
import '../../css/b/bm1mepbat.css';
import '../../css/t/tm8mwlb-l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uyyqc0_4u"/><path class="lt5eqobgu"/><path class="bm1mepbat"/><path class="tm8mwlb-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dining-table-48-bold"} {...others} />);
}

export default Component;
