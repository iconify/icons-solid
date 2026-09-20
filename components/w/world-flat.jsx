import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uotemyb7a.css';
import '../../css/f/fz30vabuc.css';
import '../../css/l/lkxfdsbgt.css';
import '../../css/f/f3nb1bcuh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="uotemyb7a"/><path clip-rule="evenodd" class="fz30vabuc"/><path clip-rule="evenodd" class="lkxfdsbgt"/><path class="f3nb1bcuh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:world-flat"} {...others} />);
}

export default Component;
