import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_e7a256j.css';
import '../../css/v/vs4phpb7z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u_e7a256j"/><path class="vs4phpb7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dynacat"} {...others} />);
}

export default Component;
