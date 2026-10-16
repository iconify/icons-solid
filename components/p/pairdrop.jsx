import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3c4wab0s.css';
import '../../css/a/ay474ak4m.css';
import '../../css/h/h-9zx8bmp.css';
import '../../css/v/vnutggnhe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h3c4wab0s"/><path class="ay474ak4m"/><path class="h-9zx8bmp"/><path class="vnutggnhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:pairdrop"} {...others} />);
}

export default Component;
