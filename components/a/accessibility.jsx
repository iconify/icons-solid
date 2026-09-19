import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_spsnbot.css';
import '../../css/j/jgbcgmb9x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l_spsnbot"/><path class="jgbcgmb9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:accessibility"} {...others} />);
}

export default Component;
