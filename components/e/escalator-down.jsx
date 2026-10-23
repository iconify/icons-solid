import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/krg250-ib.css';
import '../../css/c/c_9t11wpq.css';
import '../../css/v/vj0e7ab9i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="krg250-ib"/><path class="c_9t11wpq"/><path class="vj0e7ab9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:escalator-down"} {...others} />);
}

export default Component;
