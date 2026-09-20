import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/et_cvso1w.css';
import '../../css/k/kac42ebbo.css';
import '../../css/z/zzc0dw9zv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="et_cvso1w"/><path class="kac42ebbo"/><path class="zzc0dw9zv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:file-vector"} {...others} />);
}

export default Component;
