import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahp9sifuv.css';
import '../../css/f/f8g2gccrz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ahp9sifuv"/><path class="f8g2gccrz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:system-setting-filled"} {...others} />);
}

export default Component;
