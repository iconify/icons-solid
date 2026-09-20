import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sdhskebrq.css';
import '../../css/l/l51b0lbbq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sdhskebrq"/><path class="l51b0lbbq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:mobile-shortcut-filled"} {...others} />);
}

export default Component;
