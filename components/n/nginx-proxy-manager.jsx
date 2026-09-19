import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kh1hgwpzi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kh1hgwpzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:nginx-proxy-manager"} {...others} />);
}

export default Component;
