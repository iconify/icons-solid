import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a4e3nhyuj.css';
import '../../css/d/d5j2lgbbn.css';
import '../../css/e/eh9x2ebds.css';
import '../../css/d/d49oa4axd.css';
import '../../css/n/ne96oobnu.css';
import '../../css/z/zm59usbqe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="a4e3nhyuj"/><path class="d5j2lgbbn"/><path class="eh9x2ebds"/><path class="d49oa4axd"/><path class="ne96oobnu"/><path class="zm59usbqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:math-symbols"} {...others} />);
}

export default Component;
