import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kj91_xmgc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kj91_xmgc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:data-cloud-check-filled"} {...others} />);
}

export default Component;
