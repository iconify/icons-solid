import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kxbo1ktom.css';
import '../../css/d/dzx2ulbpg.css';
import '../../css/a/ag6fv3t9x.css';
import '../../css/t/tlotjlh8b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kxbo1ktom"/><path class="dzx2ulbpg"/><path class="ag6fv3t9x"/><path class="tlotjlh8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bed"} {...others} />);
}

export default Component;
