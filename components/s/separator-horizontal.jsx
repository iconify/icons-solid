import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htt2-vb-k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="htt2-vb-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:separator-horizontal"} {...others} />);
}

export default Component;
