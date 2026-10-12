import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ayx4uqb6m.css';
import '../../css/e/e1yqppb8t.css';
import '../../css/a/awqw_5bld.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ayx4uqb6m"/><path class="e1yqppb8t"/><path class="awqw_5bld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:warehouse"} {...others} />);
}

export default Component;
