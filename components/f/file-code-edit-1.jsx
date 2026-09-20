import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q8z4yib3m.css';
import '../../css/z/zgp1fe1ve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q8z4yib3m"/><path class="zgp1fe1ve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:file-code-edit-1"} {...others} />);
}

export default Component;
