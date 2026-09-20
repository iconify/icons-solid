import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ecc9xbbqc.css';
import '../../css/m/mmxphf4-j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ecc9xbbqc"/><path clip-rule="evenodd" class="mmxphf4-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:haze-fill"} {...others} />);
}

export default Component;
