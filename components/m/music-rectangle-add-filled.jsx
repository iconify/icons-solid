import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mzsnjchuv.css';
import '../../css/a/a_b-kq5rh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mzsnjchuv"/><path class="a_b-kq5rh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:music-rectangle-add-filled"} {...others} />);
}

export default Component;
