import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bul2c6-4f.css';
import '../../css/a/adspdac1j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bul2c6-4f"/><path class="adspdac1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:file-yaml-filled"} {...others} />);
}

export default Component;
