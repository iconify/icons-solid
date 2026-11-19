import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xcvk57adi.css';
import '../../css/q/q_c3efsrs.css';
import '../../css/u/uilqb5bzk.css';
import '../../css/d/dkli7ybia.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xcvk57adi"/><path class="q_c3efsrs"/><circle class="uilqb5bzk"/><path class="dkli7ybia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:restore-plus"} {...others} />);
}

export default Component;
