import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qem0c1mgy.css';
import '../../css/s/sfzdk5buh.css';
import '../../css/e/ec4sscspa.css';
import '../../css/n/no_ar1xgm.css';
import '../../css/s/swljdbpoi.css';
import '../../css/z/zo1om_j7i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qem0c1mgy"/><path class="sfzdk5buh"/><path class="ec4sscspa"/><path class="no_ar1xgm"/><path class="swljdbpoi"/><path class="zo1om_j7i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:common-file-add"} {...others} />);
}

export default Component;
