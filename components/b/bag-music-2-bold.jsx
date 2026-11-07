import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i58hs0j8m.css';
import '../../css/l/l-lriixbk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i58hs0j8m"/><path clip-rule="evenodd" class="l-lriixbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-music-2-bold"} {...others} />);
}

export default Component;
