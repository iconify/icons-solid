import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u_ec1fbcy.css';
import '../../css/c/cr23qknpj.css';
import '../../css/o/owcrvxbsm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u_ec1fbcy"/><path class="cr23qknpj"/><path class="owcrvxbsm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:message-circle-code-duotone"} {...others} />);
}

export default Component;
