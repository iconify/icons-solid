import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s57kuzu5k.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="s57kuzu5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:mode-light-filled"} {...others} />);
}

export default Component;
