import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-bbnvbzg.css';
import '../../css/m/mvcw08bgw.css';
import '../../css/a/akdbaebrb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l-bbnvbzg"/><path class="mvcw08bgw"/><path class="akdbaebrb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:layers-filled"} {...others} />);
}

export default Component;
