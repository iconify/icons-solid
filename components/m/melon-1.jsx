import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/omv9s7boz.css';
import '../../css/u/uekytfwoi.css';
import '../../css/c/cf023dkpi.css';
import '../../css/j/jzbgh9b7f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="omv9s7boz"/><path class="uekytfwoi"/><path class="cf023dkpi"/><path class="jzbgh9b7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:melon-1"} {...others} />);
}

export default Component;
