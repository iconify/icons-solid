import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_nc-k5jc.css';
import '../../css/b/b9b858bmv.css';
import '../../css/t/tplhgkhuc.css';
import '../../css/l/lupdytbsv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a_nc-k5jc"/><path class="b9b858bmv"/><path class="tplhgkhuc"/><path class="lupdytbsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:data-centre-20-bold"} {...others} />);
}

export default Component;
