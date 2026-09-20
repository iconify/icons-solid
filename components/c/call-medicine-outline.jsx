import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2zc57bff.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s2zc57bff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:call-medicine-outline"} {...others} />);
}

export default Component;
