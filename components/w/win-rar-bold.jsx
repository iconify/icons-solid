import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzwn2cbpy.css';
import '../../css/x/ximcoetmm.css';
import '../../css/f/fh6wb561q.css';
import '../../css/w/w92opjbrw.css';
import '../../css/m/m29cb185f.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rzwn2cbpy"/><path class="ximcoetmm"/><path class="fh6wb561q"/><path class="w92opjbrw"/><path class="m29cb185f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:win-rar-bold"} {...others} />);
}

export default Component;
