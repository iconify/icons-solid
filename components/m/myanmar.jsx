import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-7cfrboh.css';
import '../../css/c/crmp7vbgk.css';
import '../../css/h/hn8ri-1yp.css';
import '../../css/v/vtkwp995o.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="c-7cfrboh"/><path class="crmp7vbgk"/><path class="hn8ri-1yp"/><path class="vtkwp995o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:myanmar"} {...others} />);
}

export default Component;
