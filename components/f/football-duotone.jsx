import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w408ksbea.css';
import '../../css/g/g893x-ypb.css';
import '../../css/v/vte330b-f.css';
import '../../css/a/ai7aejrfo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="w408ksbea"/><g class="g893x-ypb"><path class="vte330b-f"/><path class="ai7aejrfo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:football-duotone"} {...others} />);
}

export default Component;
