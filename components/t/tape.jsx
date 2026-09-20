import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/byhi3osvb.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/diwvdacmo.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/o/ossrebcac.css';
import '../../css/u/uyob_ibrb.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGoFIdRbaX" class="byhi3osvb"/></defs><g class="ft5dv1b6b"><use href="#SVGoFIdRbaX"/><path class="diwvdacmo"/><g class="p_3zmsvya"><use href="#SVGoFIdRbaX"/><path class="ossrebcac"/></g><path class="uyob_ibrb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:tape"} {...others} />);
}

export default Component;
