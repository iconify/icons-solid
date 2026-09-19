import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fuua-_mlx.css';
import '../../css/w/w2u3wgntp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fuua-_mlx"/><path class="w2u3wgntp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:trash-can"} {...others} />);
}

export default Component;
