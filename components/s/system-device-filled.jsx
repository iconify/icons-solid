import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kdrep3bvl.css';
import '../../css/z/zth91qbms.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kdrep3bvl"/><path class="zth91qbms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:system-device-filled"} {...others} />);
}

export default Component;
