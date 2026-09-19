import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0fap9byy.css';
import '../../css/e/eax3dpvsz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z0fap9byy"/><path class="eax3dpvsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:transparency-filled"} {...others} />);
}

export default Component;
