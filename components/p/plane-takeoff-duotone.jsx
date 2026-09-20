import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vcvmfcbwd.css';
import '../../css/z/z6p69c57u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vcvmfcbwd"/><path class="z6p69c57u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:plane-takeoff-duotone"} {...others} />);
}

export default Component;
