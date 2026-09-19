import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/c/cnmqsablm.css';
import '../../css/g/gqaugmy8e.css';
import '../../css/j/jh6aj1bue.css';
import '../../css/l/lh9r07-bc.css';
import '../../css/i/ic6pchbnu.css';
import '../../css/r/rec2z4sap.css';
import '../../css/o/obmrpab0y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="cnmqsablm"/><path class="gqaugmy8e"/><path class="jh6aj1bue"/><path class="lh9r07-bc"/><path class="ic6pchbnu"/><path class="rec2z4sap"/><path class="obmrpab0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:dividing-line-one"} {...others} />);
}

export default Component;
