import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dn6os53tq.css';
import '../../css/v/v0rvi1v5q.css';
import '../../css/e/e4lragbaf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="dn6os53tq"/><circle class="v0rvi1v5q"/><path class="e4lragbaf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:timer"} {...others} />);
}

export default Component;
