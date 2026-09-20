import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lld8t-6gl.css';
import '../../css/n/nxnw64b0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lld8t-6gl"/><rect class="nxnw64b0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:gallery-vertical-end"} {...others} />);
}

export default Component;
