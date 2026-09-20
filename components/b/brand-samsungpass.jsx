import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mxsw543dt.css';
import '../../css/z/z2-n9fa_i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mxsw543dt"/><path class="z2-n9fa_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-samsungpass"} {...others} />);
}

export default Component;
