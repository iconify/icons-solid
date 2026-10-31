import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/avu59xt4u.css';
import '../../css/k/kb2fxybse.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="avu59xt4u"/><path class="kb2fxybse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:windows-logo-duotone-round"} {...others} />);
}

export default Component;
