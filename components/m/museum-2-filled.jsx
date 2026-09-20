import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3wndnb1w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q3wndnb1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:museum-2-filled"} {...others} />);
}

export default Component;
