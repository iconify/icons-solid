import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eio-gbbes.css';
import '../../css/r/rp04lyous.css';
import '../../css/n/no4wsvg0e.css';
import '../../css/z/zv90_cths.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="eio-gbbes"/><path clip-rule="evenodd" class="rp04lyous"/><path class="no4wsvg0e"/><path clip-rule="evenodd" class="zv90_cths"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:notification-circle"} {...others} />);
}

export default Component;
