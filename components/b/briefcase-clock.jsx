import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zieeq_dab.css';
import '../../css/x/x9h61f2bu.css';
import '../../css/c/cokzfeb7g.css';
import '../../css/n/n8p1svj0v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zieeq_dab"/><path class="x9h61f2bu"/><circle class="cokzfeb7g"/><path class="n8p1svj0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:briefcase-clock"} {...others} />);
}

export default Component;
