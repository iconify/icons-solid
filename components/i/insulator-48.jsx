import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z53h8x6cn.css';
import '../../css/v/v9j9sw6ei.css';
import '../../css/y/yfdezjbpg.css';
import '../../css/g/g101imysi.css';
import '../../css/e/erv80nbxd.css';
import '../../css/o/orkvcuu6y.css';
import '../../css/x/x-a1cabmt.css';
import '../../css/d/d5ow-fo8s.css';
import '../../css/u/uv4y59i-t.css';
import '../../css/q/qa0pm90sq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z53h8x6cn"/><path class="v9j9sw6ei"/><path class="yfdezjbpg"/><path class="g101imysi"/><path class="erv80nbxd"/><path class="orkvcuu6y"/><path class="x-a1cabmt"/><path class="d5ow-fo8s"/><path class="uv4y59i-t"/><path class="qa0pm90sq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:insulator-48"} {...others} />);
}

export default Component;
