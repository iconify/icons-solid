import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nelsscpmr.css';
import '../../css/f/fx2vq-b3e.css';
import '../../css/r/r5hjnw2io.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nelsscpmr"/><path class="fx2vq-b3e"/><path class="r5hjnw2io"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-top-bold"} {...others} />);
}

export default Component;
