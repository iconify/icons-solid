import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ea4ueqboq.css';
import '../../css/k/kcg-_5bxs.css';
import '../../css/h/hlozhpbgz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ea4ueqboq"/><path clip-rule="evenodd" class="kcg-_5bxs"/><path class="hlozhpbgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:assignment-checked"} {...others} />);
}

export default Component;
