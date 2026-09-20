import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/r/r-q-4y1nu.css';
import '../../css/m/map5wfb2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="r-q-4y1nu"/><path class="map5wfb2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-file"} {...others} />);
}

export default Component;
