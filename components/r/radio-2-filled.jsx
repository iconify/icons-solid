import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkb0jcelk.css';
import '../../css/b/breyi0bij.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gkb0jcelk"/><path class="breyi0bij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:radio-2-filled"} {...others} />);
}

export default Component;
