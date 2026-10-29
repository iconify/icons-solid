import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/luuhupbtk.css';
import '../../css/g/gtinig8dd.css';
import '../../css/u/umj1g9evr.css';
import '../../css/d/d3u3pvbaj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="luuhupbtk"/><path class="gtinig8dd"/><path class="umj1g9evr"/><path class="d3u3pvbaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:monitor"} {...others} />);
}

export default Component;
