import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oj6gwrmjs.css';
import '../../css/v/v0889sbtt.css';
import '../../css/n/nyd8i_t9f.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="oj6gwrmjs"/><path class="v0889sbtt"/><path class="nyd8i_t9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-check-bold-duotone"} {...others} />);
}

export default Component;
