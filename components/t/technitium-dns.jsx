import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ht-0wk75v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ht-0wk75v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:technitium-dns"} {...others} />);
}

export default Component;
