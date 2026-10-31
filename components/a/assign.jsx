import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qqtxr5qty.css';
import '../../css/w/wk2av8bcm.css';
import '../../css/d/d4dfktwxz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="qqtxr5qty"/><path class="wk2av8bcm"/><path class="d4dfktwxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:assign"} {...others} />);
}

export default Component;
