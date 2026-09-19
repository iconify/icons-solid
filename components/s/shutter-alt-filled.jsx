import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bzm0xyeiv.css';
import '../../css/x/xs08igbmf.css';
import '../../css/x/xaa-pclmk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bzm0xyeiv"/><path class="xs08igbmf"/><path class="xaa-pclmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:shutter-alt-filled"} {...others} />);
}

export default Component;
