import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbsaxbc2m.css';
import '../../css/k/k7cxakrzv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vbsaxbc2m"/><path class="k7cxakrzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:print"} {...others} />);
}

export default Component;
