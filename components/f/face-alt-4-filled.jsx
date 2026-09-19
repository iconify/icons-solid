import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qilianfni.css';
import '../../css/c/clmuyw1-n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qilianfni"/><path class="clmuyw1-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:face-alt-4-filled"} {...others} />);
}

export default Component;
