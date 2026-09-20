import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bva9_bcop.css';
import '../../css/m/mkzt5foon.css';
import '../../css/h/h5vc_wttc.css';
import '../../css/n/n7mdeobel.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bva9_bcop"/><path class="mkzt5foon"/><path class="h5vc_wttc"/><path class="n7mdeobel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:flip-h"} {...others} />);
}

export default Component;
