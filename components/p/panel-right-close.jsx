import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ekvx2_-2l.css';
import '../../css/x/xaz7lpbaz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ekvx2_-2l"/><path class="xaz7lpbaz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:panel-right-close"} {...others} />);
}

export default Component;
