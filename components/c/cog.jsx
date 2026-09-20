import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdagnjbde.css';
import '../../css/w/wjgo_ebim.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hdagnjbde"/><path class="wjgo_ebim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:cog"} {...others} />);
}

export default Component;
