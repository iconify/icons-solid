import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9ze3t4ye.css';
import '../../css/k/kztogd7av.css';
import '../../css/x/x6gqxacdg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y9ze3t4ye"/><path class="kztogd7av"/><path class="x6gqxacdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:camera-double"} {...others} />);
}

export default Component;
