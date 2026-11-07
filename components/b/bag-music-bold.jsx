import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gttxmhbqp.css';
import '../../css/p/pa47kd49e.css';
import '../../css/s/skxbewbgp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gttxmhbqp"/><path class="pa47kd49e"/><path clip-rule="evenodd" class="skxbewbgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-music-bold"} {...others} />);
}

export default Component;
