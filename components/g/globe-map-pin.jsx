import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ac-a9hbrx.css';
import '../../css/u/u5h8llb9a.css';
import '../../css/n/nnkifs7vx.css';
import '../../css/f/fhm0o20ic.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ac-a9hbrx"/><path class="u5h8llb9a"/><path class="nnkifs7vx"/><path class="fhm0o20ic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:globe-map-pin"} {...others} />);
}

export default Component;
