import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wtd2nibfk.css';
import '../../css/u/u51oq8zre.css';
import '../../css/a/au75f-bww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wtd2nibfk"/><path class="u51oq8zre"/><path class="au75f-bww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cake-roll"} {...others} />);
}

export default Component;
