import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gki0-s6ai.css';
import '../../css/y/y5mrveslg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gki0-s6ai"/><circle class="y5mrveslg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:music-note"} {...others} />);
}

export default Component;
