import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xcsdhr3up.css';
import '../../css/d/d__laqbtu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xcsdhr3up"/><path class="d__laqbtu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:scale"} {...others} />);
}

export default Component;
