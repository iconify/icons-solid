import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ld4ywrboa.css';
import '../../css/q/qsvb7nb9i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ld4ywrboa"/><path class="qsvb7nb9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:mosque-filled"} {...others} />);
}

export default Component;
