import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sa9s_vb_p.css';
import '../../css/m/mh82_cb0z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer sa9s_vb_p"/><path class="duoicon-primary-layer mh82_cb0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:award"} {...others} />);
}

export default Component;
