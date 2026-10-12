import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ovh5qsial.css';
import '../../css/a/admunbb4j.css';
import '../../css/q/q3x6tf25t.css';
import '../../css/x/x2cs-huwk.css';
import '../../css/v/v652e5bef.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="ovh5qsial"/><circle class="admunbb4j"/><path class="q3x6tf25t"/><circle class="x2cs-huwk"/><circle class="v652e5bef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:percent"} {...others} />);
}

export default Component;
