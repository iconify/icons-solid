import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ej_yigban.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ej_yigban"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:home-alt-2-filled"} {...others} />);
}

export default Component;
