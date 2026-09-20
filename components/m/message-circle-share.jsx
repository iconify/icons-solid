import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edtx_g3bg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="edtx_g3bg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:message-circle-share"} {...others} />);
}

export default Component;
