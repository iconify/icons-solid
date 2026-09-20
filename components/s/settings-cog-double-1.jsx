import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lwrj0pbhp.css';
import '../../css/g/gqwtgtcal.css';
import '../../css/y/yxmr97b0q.css';
import '../../css/p/pd-2-rbfh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lwrj0pbhp"/><path class="gqwtgtcal"/><path class="yxmr97b0q"/><path class="pd-2-rbfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:settings-cog-double-1"} {...others} />);
}

export default Component;
