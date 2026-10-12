import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g7xxw5bmd.css';
import '../../css/x/xgd_k2b1k.css';
import '../../css/z/zs6f18b2u.css';
import '../../css/a/a8w51acwb.css';
import '../../css/o/omqnqwbot.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g7xxw5bmd"/><path class="xgd_k2b1k"/><circle class="zs6f18b2u"/><circle class="a8w51acwb"/><path class="omqnqwbot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:traffic-light"} {...others} />);
}

export default Component;
