import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mbhcqac4i.css';
import '../../css/y/yi1rx6b3a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mbhcqac4i"/><path class="yi1rx6b3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:fast-forward"} {...others} />);
}

export default Component;
