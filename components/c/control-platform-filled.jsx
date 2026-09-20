import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uk7i-3g6g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uk7i-3g6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:control-platform-filled"} {...others} />);
}

export default Component;
