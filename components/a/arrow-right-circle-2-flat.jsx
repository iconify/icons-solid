import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k1noy7o0r.css';
import '../../css/s/sqi30mely.css';
import '../../css/x/x-1zzjbkf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k1noy7o0r"/><path clip-rule="evenodd" class="sqi30mely"/><path class="x-1zzjbkf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:arrow-right-circle-2-flat"} {...others} />);
}

export default Component;
