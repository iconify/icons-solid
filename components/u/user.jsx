import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uok9aifay.css';
import '../../css/t/tcwe4ewrv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uok9aifay"/><circle class="tcwe4ewrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:user"} {...others} />);
}

export default Component;
