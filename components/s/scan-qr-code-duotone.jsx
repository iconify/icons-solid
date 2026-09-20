import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qjql2tbsq.css';
import '../../css/z/z2rb1mz4w.css';
import '../../css/x/x5d-4gpws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qjql2tbsq"/><path class="z2rb1mz4w"/><path clip-rule="evenodd" class="x5d-4gpws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:scan-qr-code-duotone"} {...others} />);
}

export default Component;
