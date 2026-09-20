import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/x/xyjtgccot.css';
import '../../css/i/icqnb6bmt.css';
import '../../css/g/gy_rwbbll.css';
import '../../css/s/s8kke9buc.css';
import '../../css/e/edrv2wurl.css';
import '../../css/x/x0nlq6cii.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g class="xyjtgccot"><path class="icqnb6bmt"/><path clip-rule="evenodd" class="gy_rwbbll"/></g><path clip-rule="evenodd" class="s8kke9buc"/><path class="edrv2wurl"/><path clip-rule="evenodd" class="x0nlq6cii"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:paint-pallet-circle"} {...others} />);
}

export default Component;
