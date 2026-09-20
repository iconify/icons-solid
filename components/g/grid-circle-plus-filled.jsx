import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qph4_1bif.css';
import '../../css/d/d9tus8bdi.css';
import '../../css/a/apqkilkyv.css';
import '../../css/c/c8540bbmd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qph4_1bif"/><circle class="d9tus8bdi"/><circle class="apqkilkyv"/><circle class="c8540bbmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:grid-circle-plus-filled"} {...others} />);
}

export default Component;
