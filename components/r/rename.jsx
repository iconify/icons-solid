import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cnn5r14mc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cnn5r14mc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:rename"} {...others} />);
}

export default Component;
