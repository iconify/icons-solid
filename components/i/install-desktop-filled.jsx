import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5fihgbly.css';
import '../../css/n/npbkqyb3w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s5fihgbly"/><path class="npbkqyb3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:install-desktop-filled"} {...others} />);
}

export default Component;
