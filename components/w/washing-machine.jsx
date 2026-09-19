import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4d4f-b6h.css';
import '../../css/v/v1qda8bgr.css';
import '../../css/p/pujaovdwh.css';
import '../../css/o/ojrq0jbfh.css';
import '../../css/f/fkfneqw5u.css';

const viewBox = {"width":49,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="g4d4f-b6h"/><path class="v1qda8bgr"/><circle class="pujaovdwh"/><circle class="ojrq0jbfh"/><circle class="fkfneqw5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:washing-machine"} {...others} />);
}

export default Component;
