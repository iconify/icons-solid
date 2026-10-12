import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/akwolfbei.css';
import '../../css/m/m8ds2xbvu.css';
import '../../css/p/pfcxgibkx.css';
import '../../css/d/dtnmf3bzb.css';
import '../../css/x/xrr1tdb1m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(90 8.98 7.88)" class="akwolfbei"/><circle transform="matrix(0 1 1 0 12.23 13.33)" class="m8ds2xbvu"/><path class="pfcxgibkx"/><circle transform="rotate(90 8.98 7.88)" class="dtnmf3bzb"/><circle transform="matrix(0 1 1 0 12.23 13.33)" class="xrr1tdb1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:controls"} {...others} />);
}

export default Component;
