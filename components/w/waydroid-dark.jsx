import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/imw09osfp.css';
import '../../css/n/n_03jgbut.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="imw09osfp"/><path class="n_03jgbut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:waydroid-dark"} {...others} />);
}

export default Component;
