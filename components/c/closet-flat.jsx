import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qmop-ib2u.css';
import '../../css/g/gcsak2rrc.css';
import '../../css/o/olf4hhp5l.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qmop-ib2u"/><path class="gcsak2rrc"/><path clip-rule="evenodd" class="olf4hhp5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:closet-flat"} {...others} />);
}

export default Component;
