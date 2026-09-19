import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qilianfni.css';
import '../../css/i/in2__ug-v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qilianfni"/><path class="in2__ug-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:face"} {...others} />);
}

export default Component;
