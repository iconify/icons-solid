import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/idfvmxr2o.css';
import '../../css/u/uc13pobzv.css';
import '../../css/x/x3sbhjonu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="idfvmxr2o"/><path class="uc13pobzv"/><path class="x3sbhjonu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:color-swatch"} {...others} />);
}

export default Component;
